import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import questionsReducer from "./questions/reducer";
import settingsReducer from "./settings/reducer";
import leaderboardReducer from "./leaderboard/reducer";

const reducer = combineReducers({
  questions: questionsReducer,
  settings: settingsReducer,
  leaderboard: leaderboardReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
