import axios from "axios";
import api from "../api";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const MUSIC_API_KEY = process.env.REACT_APP_MUSIC_API_KEY;

function getCountryPage(countryName, today) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_DATA_REQUEST" });
      const weatherApi = api.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const musicApi = api.get(
        `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${countryName}&api_key=${MUSIC_API_KEY}&format=json`
      );
      const newsApi = api.get(
        `https://newsapi.org/v2/everything?q=${countryName}&from
      =${today}&pageSize=20&apiKey=${NEWS_API_KEY}`
      );
      // const newsApi = api.get(        
      //   `https://api.newscatcherapi.com/v2/search?q=Apple&from=2021/12/15&countries=CA&page_size=1`, {
      //   headers: { 'x-api-key': 'LfeIxjEnn6OGgdwPJU4fEbiBkeb3lSu-Ud1QXBQOtSo' }
      // }
      // );
      // const newsApi = api.get(
      //   'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GP8s84Hs3ZKuZA7tcjg9hT7WfEVlzL8Y'

      // );

      let [weather, music, news] =
        await Promise.all([
          weatherApi,
          musicApi,
          newsApi
        ]);
      // console.log('날씨', weather.data)
      // console.log('음악', music.data)
      // console.log('뉴스', news.data)
      // console.log('뉴욕타임즈뉴스', news.data.response.docs)

      // console.log(today, '컨츄리액션')

      dispatch({
        type: "GET_COUNTRY_DATA_SUCCESS",
        payload: {
          weather: weather.data,
          music: music.data,
          news: news.data,
          // news: news.data.response.docs
        },
        //axios 는 .data안에 데이터필드에 값이 있다.
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_COUNTRY_DATA_FAILURE" });
    }
  };
}

function loadingChange() {
  return (dispatch) => {
    dispatch({ type: "GET_DATA_REQUEST" });
  };
}

export const countryAction = {
  getCountryPage,
  loadingChange,
};