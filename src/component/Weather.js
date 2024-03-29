import React from "react";
import "../App.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSnowflake,
  faUmbrella,
  faCloudSun,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";

const Weather = ({ weather, loading }) => {
  // console.log('웨더페이지10번째줄', loading)
  // console.log('웨더페이지 날씨데이터 ', weather)
  // console.log(Number(weather.main?.temp) < 0);

  if (!weather) {
    return <Spinner animation="border" variant="primary" />;
  }
  return (
    <motion.div
      initial={{
        scale: 1,
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      exit={{
        scale: 1,
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      className="weather-wrap"
    >
      {/* {console.log(weather)} */}
      <div>
        <h2>{weather.name}</h2>
      </div>
      <div className="weather-data">
        <div className="weather-temp">
          {Number(weather.main?.temp) > 0 ? (
            <FontAwesomeIcon icon={faTemperatureArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faTemperatureArrowDown} />
          )}
          &nbsp;
          <div>{weather.main?.temp}</div>
        </div>
        <div className="weather-temp">
          {/* <div>{weather.weather[0]?.description}, '구름 등등 자세히'</div> */}
          <FontAwesomeIcon
            icon={
              weather.snow
                ? faSnowflake
                : weather?.rain
                ? faUmbrella
                : faCloudSun
            }
          />
          {/* <span>{weather.snow || weather.rain ? ['1h'] + weather.rain["1h"] : '2'}</span> */}
        </div>
        <div className="weather-temp">
          <div>
            <FontAwesomeIcon
              icon={faLocationArrow}
              size="1x"
              color="#000"
              transform={{ rotate: Number(weather?.wind?.deg) - 45 }}
            />
            &nbsp;{weather.wind?.speed}
            &nbsp;
            <FontAwesomeIcon className="wind-icon" icon={faWind} />
          </div>
          {/* <div>'풍속', {weather.wind.speed}<FontAwesomeIcon icon={faLocationArrow} size="2x" color="#000" transform={{ rotate: -45 }} /></div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Weather;
