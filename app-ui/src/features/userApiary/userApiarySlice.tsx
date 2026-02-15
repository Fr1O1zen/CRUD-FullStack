import { createSlice } from "@reduxjs/toolkit"

interface UserApiaryState {
  hives:Array<{name: string; }>;
}

const initialState: UserApiaryState = {
    hives: [],
}
export const userApiarySlice = createSlice({
    name: 'userApiary',
    initialState,
    reducers: {
        setUserApiary: (state, action) => {
            state.hives = action.payload.hives;
        },
        getUserApiary: (state) => {
            return state;
        },
    },
});

export const {setUserApiary, getUserApiary } = userApiarySlice.actions;
export default userApiarySlice.reducer;