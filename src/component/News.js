import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import NewsPagination from './NewsPagination'
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'

const News = ({ news, loading }) => {
    // console.log('뉴스페이지7번째줄', loading)
    // console.log('News컴포넌트의 데이터', news.articles)
    // console.log(news)
    // console.log('작성자', news[0].author)
    // console.log('기사본문', news[0].content)
    // console.log('기사설명', news[0].description)
    // console.log('작성일자', news[0].publishedAt)
    // console.log('기사제목', news[0].title)
    // console.log('출처 url', news[0].url)
    // console.log('출처 url의 이미지', news[0].urlToImage)
    // console.log('출처', news[0].source.name)


    // const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const offset = (page - 1) * limit;
    // console.log('오프셋값', offset)
    // console.log('페이지수', page)
    // console.log('보여질 컨텐츠 갯수', limit)

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
            <header style={{ display: 'flex' }}>
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
            </header>
            <div style={{ display: 'flex', height: 300, border: '1px solid red' }}>
                <Container>
                    <Row>

                        {news?.articles?.slice(offset, offset + limit).map((item, idx) =>
                            // { console.log(item, idx) }
                            <Col style={{ width: '20%', height: '250px', overflow: 'scroll' }}>
                                <NewsItem item={item} idx={idx} />

                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
            <NewsPagination
                total={news.articles.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </section>
    )
}

export default News