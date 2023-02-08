import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Pagination from './Pagination'
import Spinner from 'react-bootstrap/Spinner';

const News = ({ news, loading }) => {
    console.log('뉴스페이지7번째줄', loading)
    console.log('News컴포넌트의 데이터', news.articles)
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

    if (news) {
        { console.log(loading, 'loading상태') }
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <section>
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
            {news.articles.slice(offset, offset + limit).map((item, idx) =>
                // { console.log(item, idx) }
                <NewsItem item={item} idx={idx} />

            )}
            <Pagination
                total={news.articles.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </section>
    )
}

export default News