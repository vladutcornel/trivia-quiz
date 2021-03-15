/* eslint-disable import/prefer-default-export */
import OpenTrivia, { SELECT_TYPE } from "../../api/OpenTrivia";

import db from "./db";
import getSettings from "../settings";
import arrayShuffle from "../../lib/arrayShuffle";
import Storage from "../../api/Storage";

export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const REPLACE_QUESTION = "REPLACE_QUESTION";
export const DELETE_QUESTIONS_FROM_MEMORY = "DELETE_QUESTIONS_FROM_MEMORY";

const storage = new Storage("questions");

/**
 * Load questions from IndexedDB into Redux
 *
 * @returns {function(*): Promise<void>}
 */
export const loadQuestionsFromDB = () => async (dispatch) => {
  const settings = getSettings();
  const questions = await db.questions.limit(settings.amount).toArray();

  dispatch({
    type: LOAD_QUESTIONS,
    payload: {
      questions,
      expire: storage.getItem("expire"),
    },
  });
};

/**
 * Fetch questions from API, and save them in IndexedDB
 * @returns {function(*): Promise<void>}
 */
export const loadQuestionsFromAPI = () => async (dispatch) => {
  const settings = getSettings();
  const trivia = new OpenTrivia({
    ...settings,
    encode: "url3986",
  });
  const questions = (await trivia.load(settings.amount)).map((question) => {
    let answers;

    if (question.type === SELECT_TYPE.BOOLEAN) {
      answers = ["True", "False"];
    } else {
      answers = arrayShuffle(
        question.incorrect_answers.concat([question.correct_answer]),
      );
    }

    const correctAnswer = answers.findIndex((answer) => answer === question.correct_answer);

    return ({
      id: question.id,
      question: decodeURIComponent(question.question),
      answers: answers.map((answer) => decodeURIComponent(answer)),
      correctAnswer,
      isLast: false,
      userAnswer: -1,
      difficulty: question.difficulty,
      type: question.type,
      originalCorrectAnswer: question.correct_answer,
    });
  });

  questions[questions.length - 1].isLast = true;

  await db.questions.clear();
  await db.questions.bulkPut(questions);

  storage.setItem("expire", Date.now() + 15 * 60 * 1000);

  await loadQuestionsFromDB(settings)(dispatch);
};

/**
 * Update the user answer for the provided question
 *
 * @param {Object} question
 * @param {Number} answerIndex
 */
export const saveAnswer = ({ question, answerIndex }) => async (dispatch) => {
  const dbQuestion = await db.questions.get(question.id);

  if (dbQuestion.userAnswer === answerIndex) {
    return;
  }
  dbQuestion.userAnswer = answerIndex;

  await db.questions.put(dbQuestion);

  dispatch({
    type: REPLACE_QUESTION,
    payload: {
      question: dbQuestion,
    },
  });
};

export const deleteQuestionsFromMemory = () => ({
  type: DELETE_QUESTIONS_FROM_MEMORY,
});
