import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategorySlice = createSlice({
  name: 'currentGenreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      console.log(action.payload);
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } =
  genreOrCategorySlice.actions;

export default genreOrCategorySlice.reducer;
