import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const NewsItem = ({ item, idx }) => {
    // console.log(item)
    // console.log(idx)
    return (
        <Container>
            <Row style={{ height: '150px', overflow: 'hidden' }}>
                <Col sm={4} style={{ border: "1px solid black" }}>
                    <img style={{ width: '100%', height: '100%' }} src={item.urlToImage} />
                </Col>
                <Col>
                    <article key={idx}>

                        <h3>
                            {item.author}. {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <span>{item.publishedAt}</span>
                    </article>
                </Col>
            </Row>
        </Container>

    )
}

export default NewsItem