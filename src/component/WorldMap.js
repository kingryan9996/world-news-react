import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import "react-tooltip/dist/react-tooltip.css";

const WorldMap = ({ show, setShow }) => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const { params } = useParams();
  console.log(params);

  const detailPage = (geo) => {
    // console.log(geo)
    navigate(`/country/${geo.id}`);
    setShow(false);
  };

  return (
    <motion.svg
      initial={{
        //scale: 1.5,
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      className="WorldMap"
      style={
        setShow
          ? { width: "75vw", height: "85vh", transform: "translateX(5%)" }
          : { width: "25vw", height: "30vh", transform: "translateX(5%)" }
      }
    >
      <ComposableMap
        data-tip=""
        data-for="tooltip"
        className="navigate-push"
      >
        <ZoomableGroup zoom={1}>
          {/* {""} */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, idx) => (
                // console.log('국가id', geo.id, '국가코드', geo.properties["Alpha-2"]),
                <OverlayTrigger
                  //  key={geo}
                  // geo={geo}
                  key={"map" + idx}
                  placement="top"
                  overlay={
                    <Tooltip
                      id={`tooltip-${geo.properties.name}`}
                      className="tooltip"
                    >
                      <strong>{geo.properties.name}</strong>
                    </Tooltip>
                  }
                >
                  <Geography
                    geography={geo}
                    id={content}
                    onClick={() => {
                      detailPage(geo);
                    }}
                    onMouseEnter={(e) => {
                      // console.log(geo, 'geo?')
                      const NAME = geo.properties.name;
                      setContent(`${NAME}`);
                    }}
                    onMouseLeave={() => {
                      setContent("");
                    }}
                    style={{
                      hover: {
                        // fill: "#F53",
                        fill: "#6cc4aa",
                        outline: "none",
                      },
                    }}
                  />
                </OverlayTrigger>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </motion.svg >
  );
};

export default WorldMap;
