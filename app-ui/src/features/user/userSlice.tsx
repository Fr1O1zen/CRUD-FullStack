import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface userState {
    id: string;
    name: string;
    email: string;
    isLoggedIn?: boolean;
}

const initialState: userState = {
    id: '',
    name: '',
    email: '',
    isLoggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ id: string; name: string; email: string }>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isLoggedIn = true;
        },
        getUser: (state) => {
            return state;
        },
        logOut: (state) => {
            state.id = '';
            state.name = '';
            state.email = '';
            state.isLoggedIn = false;
        }
    },
});

export const { setUser, getUser, logOut } = userSlice.actions;
export default userSlice.reducer;