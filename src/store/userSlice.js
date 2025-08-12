import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users:[],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({ id: Date.now(), ...action.payload });
    },

    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) state.users[index] = action.payload;
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const {addUser,updateUser,deleteUser}=userSlice.actions


export default userSlice.reducer