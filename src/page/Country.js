import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MyC } from '../MyContext'

const Country = () => {

    let { id } = useParams()
    // console.log(id, '파람스')

    const { } = useContext(MyC)

    const [weather, setWeather] = useState();
    const getWeatherData = async () => {
        let APIkey = "f07758540fae0603dbb22c2388dd2bdd";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${APIkey}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        console.log(data.name, '나라이름');
        console.log(data.main.temp, '현재온도');
        console.log(data.main.temp_min, '최저기온');
        console.log(data.main.temp_max, '최대기온');
        console.log(data.weather[0].main, '구름 등등');
        console.log(data.weather[0].description, '구름 등등 자세히');
        console.log(data.wind.speed, '풍속');
        console.log(data.wind.deg, '바람방향');
        setWeather(data);
    }

    useEffect(() => {
        getWeatherData()
        // getSpoty()
    }, [setWeather])


    return (
        <div>
            <div>{weather?.name}, '나라이름'</div>
            <div>{weather?.main.temp}, '현재온도'</div>
            <div>{weather?.main.temp_min}, '최저기온'</div>
            <div>{weather?.main.temp_max}, '최대기온'</div>
            <div>{weather?.weather[0].main}, '구름 등등'</div>
            <div>{weather?.weather[0].description}, '구름 등등 자세히'</div>
            <div>{weather?.wind.speed}, '풍속'</div>
            <div>{weather?.wind.deg}, '바람방향'</div>
        </div>
    )
}

export default Country
