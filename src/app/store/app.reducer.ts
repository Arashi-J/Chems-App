import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../core/models/models";
import * as reducers from "./reducers";

export const appReducers: ActionReducerMap<AppState> = {
    auth: reducers.authReducer
};

