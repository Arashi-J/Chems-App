import { createAction, props } from "@ngrx/store";
import { LoginResponse, User } from "src/app/core/models/models";

export const login = createAction(
    '[Login Page] Login',
    props<{ username: string, password: string; }>()
);

export const validateToken = createAction(
    '[Login Page] Validate Token',
    props<{ response: LoginResponse; }>()
);

export const loginSuccess = createAction(
    '[Login Page] Login Success',
    props<{ user: User; }>()
);
export const loginError = createAction(
    '[Login Page] Login Error',
    props<{ payload: any; }>()
);

export const logout = createAction(
    '[Navbar] Logout'
);