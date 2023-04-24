import React, { useState, useEffect, useRef } from "react";
import NewsItem from "./NewsItem";
import Spinner from "react-bootstrap/Spinner";
import "../App.scss";
import axios from "axios";

const News = ({ news, loading, countryName }) => {
  const [dragState, setDragState] = useState(news);
  const pageRef = useRef(1);

  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);
  // console.log(news);
  // console.log(pageRef.current);

  const nowDate = new Date();
  let year = nowDate.getFullYear();
  const getAPI = () => {
    //${year}
    //`https://api.nytimes.com/svc/search/v2/${year}/articlesearch.json?q=${countryName}?page=${pageRef.current}&api-key=GP8s84Hs3ZKuZA7tcjg9hT7WfEVlzL8Y`
    // 년도 기입하니까 cors에러 남
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${countryName}?page=${pageRef.current}&api-key=GP8s84Hs3ZKuZA7tcjg9hT7WfEVlzL8Y`
      )
      .then((res) => {
        setDragState(res.data.response.docs);
        pageRef.current++;
      });
  };
  /////////////////////

  const getInfiAPI = () => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${countryName}?page=${pageRef.current}&api-key=GP8s84Hs3ZKuZA7tcjg9hT7WfEVlzL8Y`
      )
      .then((res) => {
        // console.log(res.data.response.docs, '추가될값')

        let newValue = dragState;
        res.data.response.docs.map((obj) => {
          return newValue.push(obj);
        });
        setDragState([...newValue]);
        pageRef.current++;
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && dragState != undefined) {
          // const { page, totalElement, limit } = params.pageData;
          // if (totalElement < limit * (page - 1)) {
          // 	return;
          // }
          // params.getProductList({ page: page + 1 });
          getInfiAPI();
          console.log("무한스크롤 호출");
        }
      },
      { threshold: 0.6, rootMargin: "50px" }
    );
    bottomObserver.current = observer;
  }, []);

  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);
  // console.log(bottom, "바텀");

  useEffect(() => {
    getAPI();
  }, []);
  ////////////////////////////////////////////////////////////////////

  if (!news) {
    return <Spinner animation="border" variant="primary" />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        paddingTop: "3%",
      }}
    >
      {dragState &&
        dragState.map((item, idx) => <NewsItem item={item} key={idx} />)}
      <div
        style={{ position: "absolute", left: 0, bottom: 20, opacity: 0 }}
        ref={setBottom}
      >
        바닥
      </div>
    </div>
  );
};

export default News;
