import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../App.css'
import 'react-tooltip/dist/react-tooltip.css'
import WorldMap from "../component/WorldMap"
import { Container, Row, Col } from "react-bootstrap"




const Home = () => {
    // const [content, setContent] = useState("22")
    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


    const getUrl = async () => {
        let url = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
        let respons = await fetch(url)
        let data = await respons.json()
        // console.log(data, '데이ㅓㅌ')
    }
    // getUrl()
    const [content, setContent] = useState("Russia")

    // useEffect(() => {
    //     console.log(content)
    // }, [content])

    const detailPage = (geo) => {
        console.log(geo)
        navigate(`/country/${geo.id}`)
    }

    const navigate = useNavigate()

    useEffect(() => {
        console.log('Home페이지 useEffect 알림')
    }, [])

    return (
        <div className="abcd">
            <WorldMap />
        </div>
    )
}

export default Home
