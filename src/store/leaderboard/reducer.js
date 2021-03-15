import fillState from "../fillState";
import * as actions from "./actions";

const initialState = Object.freeze({
  top: [],
  latest: {},
});

export default function leaderboardReducer(
  state = initialState,
  { type, payload = {} } = {},
) {
  switch (type) {
    case actions.LOAD_LEADERBOARD: return fillState(state, {
      top: [...payload.top],
    });
    case actions.LOAD_LATEST_PLAY: return fillState(state, {
      latest: { ...payload.latest },
    });
    default:
  }
  return state;
}
