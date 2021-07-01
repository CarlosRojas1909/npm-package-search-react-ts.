import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoryState {
  loading: boolean;
  data: string[];
  error: string | null;
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const repositoriesReducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, data: [], error: null };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default repositoriesReducer;
