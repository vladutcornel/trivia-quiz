import fillState from "../fillState";
import * as actions from "./actions";

const initialState = Object.freeze({
  questions: [],
  expire: Date.now(),
});

export default function questionsReducer(state = initialState, { type, payload = {} } = {}) {
  switch (type) {
    case actions.LOAD_QUESTIONS: return fillState(state, {
      expire: payload.expire,
      questions: [...payload.questions],
    });
    case actions.DELETE_QUESTIONS_FROM_MEMORY: return fillState(state, {
      questions: [],
    });
    case actions.REPLACE_QUESTION: return fillState(state, {
      questions: state.questions.map((question) => {
        if (question.id === payload.question.id) {
          return { ...payload.question };
        }

        return { ...question };
      }),
    });
    default:
  }
  return state;
}
