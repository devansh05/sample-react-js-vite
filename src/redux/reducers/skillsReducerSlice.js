import { createSlice } from '@reduxjs/toolkit';

const skillSlice = createSlice({
  name: 'skill',
  initialState: {
    skill: {},
  },
  reducers: {
    requestUpdateSkill: (state, action) => {
      // This action triggers the saga but does not directly update the state
    },
    updateSkill: (state, action) => {
      state.skill = action.payload;
    },
  },
});

export const { requestUpdateSkill, updateSkill } = skillSlice.actions;

export default skillSlice.reducer;