import { createSlice } from '@reduxjs/toolkit';

export const genreOrCatagory = createSlice({
  name: 'genreOrCatagory',
  initialState: {
    genreOrCategory: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCatagory: (state, action) => {
      // state.genreOrCategory = action.payload.genreOrCategory;

      console.log(action.payload);
    },
  },
});

export const { selectGenreOrCatagory } = genreOrCatagory.actions;

export default genreOrCatagory.reducer;
