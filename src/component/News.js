import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import NewsPagination from './NewsPagination'
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'

const News = ({ news, loading }) => {
    // console.log('뉴스페이지7번째줄', loading)
    // console.log('News컴포넌트의 데이터', news.articles)
    console.log(news)

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((data) =>  setPosts(data) );
    // }, []);

    // console.log(news)
    if (!news) {
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <section>
            {/* <div>
                {news.map((item) =>
                    <div>
                        <h2>{item.source}</h2>
                        <p>{item.pub_date}</p>
                    </div>

                )}
            </div> */}
            {/* {console.log('성공성송공서오성ㅅ오')} */}
            {/* <header style={{ display: 'flex' }}>
                <h1>실시간 뉴스</h1>

                <label>
                    페이지 당 표시할 게시물 수:&nbsp;
                    <select
                        type="number"
                        value={limit}
                        onChange={({ target: { value } }) => setLimit(Number(value))}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </label>
            </header> */}
            <div style={{ display: 'flex', height: 400 }}>
                <Container>
                    <Row>

                        {news?.map((item, idx) =>
                            // { console.log(item, idx) }
                            <Col className='newsItemWrap'>
                                <NewsItem item={item} idx={idx} />

                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
            {/* {news && <NewsPagination
                total={news.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />} */}
        </section >
    )
}

export default News