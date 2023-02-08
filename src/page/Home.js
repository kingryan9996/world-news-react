import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../App.css'
import 'react-tooltip/dist/react-tooltip.css'
import WorldMap from "../component/WorldMap"
import { Container, Row, Col } from "react-bootstrap"




const Home = () => {
    // const [content, setContent] = useState("22")
    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

    const marker = [
        {
            markerOffset: -15,
            name: "Buenos Aires",
            coordinates: [-58.3816, -34.6037]
        },
        { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
        { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
        { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
        { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
        { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
        { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
        { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
        { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
        { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
        { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
        { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] }
    ];

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
