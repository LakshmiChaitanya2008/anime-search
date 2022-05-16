import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
  name: "anime",
  initialState: {
    search: "",
    animes: [],
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setAnimes: (state, action) => {
      state.animes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnimes, setSearch } = animeSlice.actions;

export default animeSlice.reducer;
