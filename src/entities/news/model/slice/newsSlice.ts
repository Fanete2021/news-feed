import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {News, NewsSchema} from "@/entities/news";
import { fetchNews } from '../service/fetchNews';

const initialState: NewsSchema = {
  data: [],
  isLoading: false,
  total: 0,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<News[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state: NewsSchema) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state: NewsSchema, action) => {
        state.isLoading = false;
        state.data = [...state.data, ...action.payload.posts];
        state.total = action.payload.total;
      })
      .addCase(fetchNews.rejected, (state: NewsSchema) => {
        state.isLoading = false;
      });
  }
});

export const { actions: newsActions } = newsSlice;
export const { reducer: newsReducer } = newsSlice;
