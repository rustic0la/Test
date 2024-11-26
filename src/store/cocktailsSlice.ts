import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CocktailsState } from "../types/cocktail";

export const fetchCocktail = createAsyncThunk(
  "cocktails/fetchCocktail",
  async (cocktailCode: string) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`
    );
    const data = await response.json();
    console.log("🚀 ~ data:", data);
    return data.drinks;
  }
);

const initialState: CocktailsState = {
  cocktails: {},
  loading: false,
  error: null,
};

const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktail.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails[action.meta.arg] = action.payload || [];
      })
      .addCase(fetchCocktail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cocktail";
      });
  },
});

export default cocktailsSlice.reducer;
