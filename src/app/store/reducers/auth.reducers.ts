import { createReducer, on } from "@ngrx/store";
import { AuthState } from "src/app/core/models/models";
import * as  actions from "../actions";

export const initialState: AuthState = { activeUser: null };

export const authReducer = createReducer(
    initialState,
    on(actions.login, (state: AuthState) => state),
    on(actions.loginSuccess, (state: AuthState) => state),
    on(actions.loginError, (state: AuthState) => state),
    on(actions.logout, (state: AuthState) => state),
);