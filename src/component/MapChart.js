import React, { useEffect, useState } from "react"
import { ComposableMap, Geographies, Geography, Marker, Annotation, ZoomableGroup } from "react-simple-maps"
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import '../App.css'
import 'react-tooltip/dist/react-tooltip.css'

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

const MapChart = () => {
    // const [content, setContent] = useState("22")
    const [content, setContent] = useState("Russia")
    useEffect(() => {
        console.log(content)
    }, [content])


    return (
        <>
            <div><h3>Let's bulid some cool maps!</h3>

                <p id={content} data-tooltip-content="hello world">
                    Tooltip1
                </p>
                <p id="{content}" data-tooltip-content="hello world">
                    Tooltip2
                </p>
            </div>
            {/* <ReactTooltip
                id="tooltip"
                effect="solid"
                place="bottom"
                type="dark"
            >{content}테스트</ReactTooltip> */}
            {/* <ReactTooltip anchorId="{content}" /> */}


            {/* <Tooltip message="검색" direction="right">{content ? content : "나라에 마우스를 가져다 대세요."} */}
            {/* <ReactTooltip anchorId={content} /> */}

            {console.log(geoUrl, 'geoUrl')}
            {/* {console.log(<ReactTooltip anchorId={content} />)} */}
            <ComposableMap data-tip="wwwwewewe" data-for="tooltip">22
                <ZoomableGroup zoom={1}>
                    {""}
                    <Geographies geography={geoUrl}>

                        {({ geographies }) =>
                            geographies.map((geo) => (

                                // console.log('국가id', geo.id, '국가코드', geo.properties["Alpha-2"]),
                                <Geography key={geo.rsmKey} geography={geo} id={content}
                                    onMouseOver={(e) => {
                                        // console.log(geo, 'geo?')
                                        const NAME = geo.properties.name;
                                        // const NAME = geo.properties["Alpha-2"];
                                        // console.log(geo.properties.name)
                                        console.log(content)
                                        console.log(e.target, "Russia")
                                        console.log(e.target.id, "Russia")
                                        // console.log(content, '2')
                                        // console.log(NAME, '3')
                                        setContent(`${NAME}`)
                                    }}
                                    onMouseLeave={() => {
                                        // setContent("");
                                    }}

                                    style={{
                                        hover: {
                                            fill: "#F53",
                                            outline: 'none'
                                        }
                                    }}
                                />
                            )
                            )
                        }
                    </Geographies>
                    {/* </ReactTooltip> */}
                    {console.log(<Geography />, 'dddddddddddddddddddddddd')}
                    {marker.map(({ name, coordinates, markerOffset }) => (
                        <Marker id={name} key={name} coordinates={coordinates}>
                            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                            <text
                                textAnchor="middle"
                                y={markerOffset}
                                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                            >
                                {name}
                            </text>
                        </Marker>
                    ))}
                    <Annotation subject={[2.3522, 48.8566]}
                        dx={-90}
                        dy={-30}
                        connectorProps={{
                            stroke: "#FF5933",
                            strokeWidth: 3,
                            strokeLinecap: "round"
                        }}>
                        <text
                            x="-8"
                            textAnchor="end"
                            alignmentBaseline="middle"
                            fill="#F53">
                            {"Paris"}
                        </text>
                    </Annotation>
                </ZoomableGroup>
            </ComposableMap>
        </>
    )
}

export default MapChart
