import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MyC } from '../MyContext'
import countryData from '../Countrydata'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import News from '../component/News';
import { countryAction } from "../redux/actions/countryAction";
import Weather from '../component/Weather'
import Music from '../component/Music'
import Spinner from 'react-bootstrap/Spinner';

const Country = () => {
    // console.log(countryData, '나라갯수')
    const { } = useContext(MyC)
    const dispatch = useDispatch()
    const { loading, weather, music, news } = useSelector(state => state.country)
    // console.log('컨츄리페이지 20번째줄', loading)

    let { id } = useParams()
    const deleteData = countryData.filter((obj) => obj['alpha-3'] == id)
    // console.log(deleteData, '새로운데이터')
    let countryName = deleteData[0].name;
    let gapValue = countryName?.replace(" ", "");

    const today = new Date()
    // console.log(today, '1오늘날짜는?')
    let year = today.getFullYear()
    // console.log(year, '몇년도?')
    let month = today.getMonth()
    // console.log(('00' + (month + 1)).slice(-2), '몇월?')
    let todaydate = today.getDate()
    // console.log(('00' + todaydate).slice(-2), '몇일?')
    // console.log(year + '-' + ('00' + (month + 1)).slice(-2) + '-' + ('00' + todaydate).slice(-2), '최종본')
    let todayDate = (year + '-' + ('00' + (month + 1)).slice(-2) + '-' + ('00' + todaydate).slice(-2))

    useEffect(() => {
        // if (loading)
        dispatch(countryAction.getCountryPage(countryName, todayDate))
        console.log('useEffect 카운터')
    }, [])


    if (loading) {
        { console.log(loading, 'loading상태') }
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <div className='2'>
            {console.log(loading, '로딩상태')}
            <Container>
                <Row>
                    <Col>
                        <Weather weather={weather} loading={loading} />
                    </Col>
                    <Col>
                        <Music music={music} loading={loading} />
                    </Col>
                </Row>
                <Row>
                    <News news={news} loading={loading} />
                </Row>
            </Container>
        </div>
    )
}

export default Country
