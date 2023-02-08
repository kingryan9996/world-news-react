import axios from "axios";

const api = axios.create({
    //기본베이스 url설정
    baseURL: "https://",
    headers: { "Content-type": "application/json" },
});

// 요청 인터셉터 추가하기
api.interceptors.request.use(
    function (config) {
        // console.log(config, "request config?");
        // 요청이 전달되기 전에 작업 수행
        return config;
    },
    function (error) {
        // console.log(error, "request error?");
        // 요청 오류가 있는 작업 수행
        return Promise.reject(error);
    }
);

// 응답 인터셉터 추가하기
api.interceptors.response.use(
    function (response) {
        // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 데이터가 있는 작업 수행
        // console.log(response, "get response?");
        return response;
    },
    function (error) {
        // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 오류가 있는 작업 수행
        // console.log(error, "response error?");
        return Promise.reject(error);
    }
);

export default api;