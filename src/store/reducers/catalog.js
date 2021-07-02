import { CatalogAPI } from "../../api/catalog-api";
import { fromJS } from "immutable";
import { createActions, handleActions, createAction } from "redux-actions";

const defaultState = fromJS({
  items: [],
  isCatalogFetching: false,
});

export const fetchCatalog = createAction("SET_CATALOG", async () => {
  const { data } = await CatalogAPI.getCatalog();
  debugger;
  return data;
});

export const setIsCatalogFetching = createAction(
  "SET_IS_CATALOG_FETCHING",
  (payload) => payload,
  () => {
    return { admin: false };
  }
);

export const catalogReducer = handleActions(
  {
    [fetchCatalog + "_FULFILLED"]: (state, { payload, meta }) => {
      debugger;
      return state.update("items", () => payload);
    },
    [fetchCatalog + "_PENDING"]: (state, { payload, meta }) => {
      debugger;
    },
    [setIsCatalogFetching]: (state, { payload, meta }) => {
      return state.update("isCatalogFetching", () => payload);
    },
  },

  defaultState
);

export default catalogReducer;
