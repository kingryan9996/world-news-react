import React, { useState, useEffect, useRef } from "react";
import NewsItem from "./NewsItem";
import NewsPagination from "./NewsPagination";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useDispatch } from "react-redux";
import { countryAction } from "../redux/actions/countryAction";
import axios from "axios";

const News = ({ news, loading, countryName }) => {
  // console.log('뉴스페이지7번째줄', loading)
  // console.log('News컴포넌트의 데이터', news.articles)
  const [dragState, setDragState] = useState(news);
  const pageRef = useRef(1);
  console.log(news);
  console.log(pageRef.current);
  const dragApi = () => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${countryName}&page=${pageRef.current}&api-key=GP8s84Hs3ZKuZA7tcjg9hT7WfEVlzL8Y`
      )
      .then((res) => {
        console.log(res.data.response.docs);
        let newValue = news;
        console.log(newValue, "쏘기전");
        pageRef.current++;
        res.data.response.docs.map((obj) => {
          newValue.push(obj);
        });
        console.log(newValue, "쏘고난 후");
        setDragState([...newValue]);
      });
  };

  // useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //         .then((res) => res.json())
  //         .then((data) =>  setPosts(data) );
  // }, []);

  // console.log(news)
  if (!news) {
    return <Spinner animation="border" variant="primary" />;
  }
  return (
    <div style={{ display: "flex", height: 400 }}>
      <Container>
        <Row>
          {dragState &&
            dragState.map((item, idx) => (
              // { console.log(item, idx) }
              <Col key={"newsFrame" + idx} className="newsItemWrap">
                <NewsItem item={item} idx={idx} />
              </Col>
            ))}
          <div>바닥</div>
          <button
            onClick={() => {
              dragApi();
            }}
          >
            클릭존
          </button>
        </Row>
      </Container>
    </div>
  );
};

export default News;
