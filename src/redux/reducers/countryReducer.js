let initialState = {
    loading: true,
    weather: {},
    music: {},
    news: {}
};

function countryReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_DATA_REQUEST":
            // console.log('자 데이터 추출 ㄱ')
            return { ...state, loading: true };
        case "GET_COUNTRY_DATA_SUCCESS":
            // console.log('성공이잖아')
            return {
                ...state,
                weather: payload.weather,
                music: payload.music,
                news: payload.news,
                loading: false,
            };
        case "GET_COUNTRY_DATA_FAILURE":
            return { ...state, loading: false };
        default:
            return { ...state };
    }
}
export default countryReducer;