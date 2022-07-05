import { createAction } from "@ngrx/store";

export const login = createAction(
    '[Login Page] Login'
)
export const loginSuccess = createAction(
    '[Login Page] Login Success'
)
export const loginError = createAction(
    '[Login Page] Login Error'
)

export const logout = createAction(
    '[Navbar] Logout'
)