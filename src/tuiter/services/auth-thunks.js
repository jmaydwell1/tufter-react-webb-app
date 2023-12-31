import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);
export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        // const {_id} = JSON.parse(localStorage.getItem("user"));
        const user = await authService.profile();
        return user;
    }
);
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    }
);
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        const newUser = await authService.updateUser(user);
        return newUser;
    }
);
export const registerThunk = createAsyncThunk(
    "user/register", async (credentials) => {
        const user = await authService.register(credentials);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    }
);



