import React from 'react'
import '../App.css'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake, faUmbrella, faCloudSun, faWind } from "@fortawesome/free-solid-svg-icons";
import Spinner from 'react-bootstrap/Spinner';

const Weather = ({ weather, loading }) => {
    console.log('웨더페이지10번째줄', loading)
    console.log('웨더페이지 날씨데이터 ', weather)


    if (weather) {
        { console.log(loading, 'loading상태') }
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <motion.div
            initial={{
                scale: 1,
                opacity: 0,
                transition: { duration: 0.5 }
            }}
            animate={{
                opacity: 1,
                transition: { duration: 0.5 }
            }}
            exit={{
                scale: 1,
                opacity: 0,
                transition: { duration: 0.5 }
            }}
            className="weather">
            <h2>{weather.name}</h2>
            <div className="weather-data">
                <div className='weather-temp'>
                    <img src='wwfw' />
                    <div>현재온도 : {weather.main.temp}</div>
                </div>
                <div className='weather-temp'>
                    <img src='wwfw' />
                    <div>{weather.weather[0].description}, '구름 등등 자세히'</div>
                    <FontAwesomeIcon icon={weather.snow ? faSnowflake : weather?.rain ? faUmbrella : faCloudSun} />
                    <span>{weather.snow || weather.rain ? ['1h'] : '2'}</span>
                </div>
                <div className='weather-temp'>0
                    <div><FontAwesomeIcon className='wind-icon' icon={faWind} />
                        '풍속', {weather.wind.speed}<FontAwesomeIcon icon={faLocationArrow} size="2x" color="#000" transform={{ rotate: weather && (weather.wind.deg - 45) }} /></div>
                    <div>'풍속', {weather.wind.speed}<FontAwesomeIcon icon={faLocationArrow} size="2x" color="#000" transform={{ rotate: -45 }} /></div>
                </div>
            </div>
        </motion.div>
    )
}

export default Weather