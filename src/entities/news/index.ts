import {getNewsData } from './model/selectors/getNewsData.ts';
import { getNewsIsLoading } from './model/selectors/getNewsIsLoading.ts';
import { getNewsTotal } from './model/selectors/getNewsTotal.ts';
import { fetchNews } from './model/service/fetchNews.ts';
import { newsActions, newsReducer, newsSlice } from './model/slice/newsSlice.ts';
import type {News, NewsSchema} from './model/types/news.ts';

export type {
  News, NewsSchema
};

export {
  newsActions,
  newsReducer,
  newsSlice,

  getNewsData,
  getNewsIsLoading,
  getNewsTotal,

  fetchNews
}
