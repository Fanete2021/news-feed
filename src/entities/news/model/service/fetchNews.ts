import { createAsyncThunk } from '@reduxjs/toolkit';
import {type ThunkConfig } from '@/app/providers/store-provider';
import type {News} from "@/entities/news";

interface FetchNewsProps {
  limit: number;
  skip: number;
}

interface FetchNewsResponse {
  posts: News[];
  total: number;
}

export const fetchNews = createAsyncThunk<
  FetchNewsResponse,
  FetchNewsProps,
  ThunkConfig<string>
> (
  'news/fetchNews',
  async (fetchNewsProps, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
    } = thunkAPI;

    try {
      const response = await extra.api.get<FetchNewsResponse>(`${import.meta.env.VITE_API}`, {
        params: {
          limit: fetchNewsProps.limit,
          skip: fetchNewsProps.skip,
        }
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
