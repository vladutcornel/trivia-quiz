import fillState from "../fillState";
import * as actions from "./actions";
import template from "./template";

export default function settingsReducer(state = template, { type, payload = {} } = {}) {
  switch (type) {
    case actions.SAVE_SETTINGS: return fillState(state, {
      ...payload,
    });
    default:
  }
  return state;
}
