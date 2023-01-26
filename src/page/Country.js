import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MyC } from '../MyContext'
import countryData from '../Countrydata'

const Country = () => {
    // console.log(countryData, '나라갯수')
    const { } = useContext(MyC)

    let { id } = useParams()
    const deleteData = countryData.filter((obj) => obj['alpha-3'] == id)
    // console.log(deleteData[0].name, '새로운데이터')
    let countryName = deleteData[0].name
    // let countryName = 'Greenland'
    console.log(countryName, '14번재줄')

    const [weather, setWeather] = useState();
    const [music, setMusic] = useState()

    const getWeatherData = async () => {

        let APIkey = "f07758540fae0603dbb22c2388dd2bdd";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${APIkey}&units=metric`;
        // let url = `https://api.openweathermap.org/data/2.5/weather?q=JAPAN&appid=${APIkey}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        // console.log(data.name, '나라이름');
        // console.log(data.main.temp, '현재온도');
        // console.log(data.main.temp_min, '최저기온');
        // console.log(data.main.temp_max, '최대기온');
        // console.log(data.weather[0].main, '구름 등등');
        // console.log(data.weather[0].description, '구름 등등 자세히');
        // console.log(data.wind.speed, '풍속');
        // console.log(data.wind.deg, '바람방향');
        setWeather(data);
        console.log(weather, 'weather데이터')
    }

    const getMusicData = async () => {
        // console.log(countryName)
        let API_key = '294a5866c2d4b1b07f81c31ad7706aea'
        let Shared_secret = '628bd8f3a673293350efa7cc1b8965dd'

        // let url = `https://ws.audioscrobbler.com`
        // 검색어로 음원검색 : /2.0/?method=track.search&track=맑은날&api_key=${API_key}&format=json`
        // 국가별 가장 인기 아티스트 : /2.0/?method=geo.gettopartists&country=${id}&api_key=${API_key}&format=json
        // 국가별 가장 인기 트랙 : /2.0/?method=geo.gettoptracks&country=${id}&api_key=${API_key}&format=json
        // let url = ` https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_key}&artist=Cher&album=Believe&format=json` //검색어로 음원검색

        // let url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${id}&api_key=${API_key}&format=json`
        console.log(countryName, '499999')
        let url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${countryName}&api_key=${API_key}&format=json`
        let response = await fetch(url)
        let data = await response.json()
        // console.log(data, '데잉ㅇㅇㅇㅇㅇ')
        setMusic(data)
        await console.log(data, 'music데이터')
        // console.log(music?.tracks)
        // console.log(music?.tracks.track)
    }



    useEffect(() => {
        getWeatherData()
        getMusicData()
    }, [])


    return (
        <div>
            <div className="weather">
                <div>{weather?.name}, '나라이름'</div>
                <div>{weather?.main.temp}, '현재온도'</div>
                <div>{weather?.main.temp_min}, '최저기온'</div>
                <div>{weather?.main.temp_max}, '최대기온'</div>
                <div>{weather?.weather[0].main}, '구름 등등'</div>
                <div>{weather?.weather[0].description}, '구름 등등 자세히'</div>
                <div>{weather?.wind.speed}, '풍속'</div>
                <div>{weather?.wind.deg}, '바람방향'</div>
            </div>
            <div className="music">
                {music?.tracks?.track?.map((obj, idx) => {
                    if (idx < 5)
                        return <div>
                            <div>노래제목 : {obj.name}</div>
                            <div>노래링크 : {obj.url}</div>
                            <div>아티스트명 : {obj.artist.name}</div>
                            <div>아티스트링크 : {obj.artist.url}</div>
                            <div><img src={obj.image[0]['#text']} /></div>
                            <div><img src={obj.image[1]['#text']} /></div>
                            <div><img src={obj.image[2]['#text']} /></div>
                            <div><img src={obj.image[3]['#text']} /></div>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Country
