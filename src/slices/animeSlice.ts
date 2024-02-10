import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/instance";

export const fetchAnime = createAsyncThunk(
  "anime/fetchAnime",
  async (page = 1) => {
    const { data } = await api("/anime", {
      method: "get",
      params: {
        page: page,
        limit: 9,
      },
    });
    return data.data;
  }
);

type AnimeState = {
  data: {}[];
  status: string;
  error?: null | string;
  page: string | number;
};

const initialState: AnimeState = {
  data: [],
  status: "idle",
  error: null,
  page: "1",
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page = parseInt(state.page as number) + 1;
    },
    previousPage: (state) => {
      state.page = parseInt(state.page as number) - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnime.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAnime.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { previousPage, nextPage } = animeSlice.actions;

export default animeSlice.reducer;
