import React, { useEffect, useState, useContext } from "react";
import { MyC } from "../MyContext";
import { useNavigate, useParams } from "react-router-dom";
import "../App.scss";
import "react-tooltip/dist/react-tooltip.css";
import WorldMap from "../component/WorldMap";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const { setCurrentCountry } = useContext(MyC);
  // const [content, setContent] = useState("22")
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const getUrl = async () => {
    let url =
      "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    let respons = await fetch(url);
    let data = await respons.json();
    // console.log(data, '데이ㅓㅌ')
  };
  // getUrl()
  const [content, setContent] = useState("Russia");

  const detailPage = (geo) => {
    console.log(geo);
    navigate(`/country/${geo.id}`);
  };

  const navigate = useNavigate();

  return (
    <div className="homeD">
      <WorldMap style={{ scale: 0.1 }} />
    </div>
  );
};

export default Home;
