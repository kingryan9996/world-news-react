import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const NewsItem = ({ item, idx }) => {
    // console.log(item)
    // console.log(idx)
    return (
        <article className='newsItem'>
            <h3>
                {item.author}. {item.title}
            </h3>
            <p style={{ overflow: 'hidden' }}>{item.snippet}</p>
            <span>{item.pub_date}</span>
            <a href={item.web_url}></a>
        </article>
    )
}

export default NewsItem