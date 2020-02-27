import { createStore, Store, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState, reducer } from "./reducer";
import thunks from "redux-thunk";
import * as Window from "./window";
import * as Subject from "./subject";

// ______________________________________________________
//
export type RootState = ReturnType<typeof initialState>;
export type ReduxStore = Store<RootState>;
// ______________________________________________________
//
export function initStore(state = initialState()) {
  return createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunks))
  );
}
export const actionCreator = {
  window: Window.actionCreator,
  subject: Subject.actionCreator
};
