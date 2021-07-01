//importing all reducers, so far there is only one
import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
