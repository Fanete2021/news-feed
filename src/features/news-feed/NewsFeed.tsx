import { useEffect, useRef, useState } from "react";
import NewsCard from "./news-card/NewsCard.tsx";
import { Spin } from "antd";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {fetchNews, getNewsData, getNewsIsLoading, getNewsTotal} from "@/entities/news";
import styles from './NewsFeed.module.scss';

const LIMIT = 10;

const NewsFeed = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useAppDispatch();

  const news = useSelector(getNewsData);
  const isLoading = useSelector(getNewsIsLoading);
  const total = useSelector(getNewsTotal);

  useEffect(() => {
    dispatch(fetchNews({ limit: LIMIT, skip: currentPage * LIMIT }));
  }, [currentPage, dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && news?.length && news.length < total) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [isLoading, news]);

  return (
    <div className={styles.NewsFeed}>
      {news?.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}

      <div ref={loaderRef} className={styles.loader}>
        {isLoading && <Spin size="large" />}
      </div>
    </div>
  );
};

export default NewsFeed;
