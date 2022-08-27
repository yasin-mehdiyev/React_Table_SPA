import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root/store';
import Users from '../../../models/interfaces/User';

const initialState: Users = {
    users: [],
    selectedUserRows: {}
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setSelectedUsers: (state, action) => {
            state.selectedUserRows = action.payload;
        },
    }
});

export const { setUsers, setSelectedUsers } = userSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;
export const selectUserRows = (state: RootState) => state.users.selectedUserRows;

export default userSlice.reducer;