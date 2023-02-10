import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const NewsItem = ({ item, idx }) => {
    // console.log(item)
    // console.log(idx)
    return (
        <Container>
            <Row>
                <Col sm={4} style={{ border: "1px solid black", padding: '1%' }}>
                    <img style={{ width: '150px' }} src={item.uri} />
                </Col>
                <Col>
                    <article key={idx}>
                        <h3>
                            {item.author}. {item.title}
                        </h3>
                        <p style={{ overflow: 'hidden' }}>{item.snippet}</p>
                        <span>{item.pub_date}</span>
                        <a href={item.web_url}></a>
                    </article>
                </Col>
            </Row>
        </Container>

    )
}

export default NewsItem