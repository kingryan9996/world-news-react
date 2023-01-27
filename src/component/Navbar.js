import React, { useContext } from 'react'
import { MyC } from '../MyContext'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    let EncodingApiKey = 'GPDRDcVxzA9rtdXCIcE7mYwIUXWJxp0vBrtDglSqA9KJLhVW1Hue7q30VxsqVPcCEG%2BAVQr6GX%2F6bpGj5rFIRw%3D%3D'
    let DecodingApiKey = 'GPDRDcVxzA9rtdXCIcE7mYwIUXWJxp0vBrtDglSqA9KJLhVW1Hue7q30VxsqVPcCEG+AVQr6GX/6bpGj5rFIRw=='

    // console.log(require('request'), '데이터터터터터')
    // console.log(request)

    // const request = require('request');

    // var url = 'http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList';
    // var queryParams = '?' + encodeURIComponent('serviceKey') + `=${ApiKey}`; /* Service Key*/

    // request({
    //     url: url + queryParams,
    //     method: 'GET'
    // }, function (error, response, body) {
    //     console.log('Status', response.statusCode);
    //     console.log('Headers', JSON.stringify(response.headers));
    //     console.log('Reponse received', body);
    // });







    const navigate = useNavigate()

    const gotoLogin = () => {
        navigate('/login')
    }
    const gotoHome = () => {
        navigate('/')
    }

    const { } = useContext(MyC)

    return (
        <div className='Navbar'><h2>Navbar</h2>
            <h3 onClick={gotoHome}>첫화면</h3>
            <h3 onClick={gotoLogin}>로그인</h3></div>
    )
}

export default Navbar