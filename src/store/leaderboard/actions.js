/* eslint-disable import/prefer-default-export,camelcase */

import db from "./db";
import getSettings from "../settings";
import Storage from "../../api/Storage";

export const LOAD_LEADERBOARD = "LOAD_LEADERBOARD";
export const LOAD_LATEST_PLAY = "LOAD_LATEST_PLAY";

const storage = new Storage("leaderboard");

/**
 * Load data about the latest score from IndexedDB into Redux
 *
 * @returns {function(*): Promise<void>}
 */
export const loadLatestPlayer = () => async (dispatch) => {
  let latest;
  try {
    latest = await db.leaderboard.get(storage.getItem("latest_id"));
  } catch (e) {
    latest = {
      id: 0,
      name: "",
    };
  }

  dispatch({
    type: LOAD_LATEST_PLAY,
    payload: {
      latest,
    },
  });
};

/**
 * Load saved scores from IndexedDB
 */
export const loadLeaderboard = () => async (dispatch) => {
  const top = await db.leaderboard
    .orderBy("percentage")
    .reverse()
    .toArray();

  dispatch({
    type: LOAD_LEADERBOARD,
    payload: {
      top,
    },
  });
};

/**
 * Save a user score in IndexedDB
 *
 * @param {String} name
 * @param {Number} answersCorrect
 */
export const saveScore = ({ name, answersCorrect }) => async (dispatch) => {
  const settings = getSettings();

  const insertId = await db.leaderboard.add({
    name,
    answersCorrect,
    answersTotal: settings.amount,
    percentage: (100 * answersCorrect) / settings.amount,
    difficulty: settings.difficulty,
    type: settings.type,
  });

  storage.setItem("latest_id", insertId);

  return loadLeaderboard()(dispatch);
};
