import React from 'react'
import { faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons'
import Spinner from 'react-bootstrap/Spinner';

const Music = ({ music, loading }) => {
    // console.log('웨더페이지6번째줄', loading)
    // console.log('음악페이지 music데이터 ', music)

    if (!music) {
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <div className="Music">
            {music?.tracks?.track?.map((obj, idx) => {
                if (idx < 1)
                    return <div>
                        <div>노래제목 : {obj.name}</div>
                        <div>노래링크 : {obj.url}</div>
                        <div>아티스트명 : {obj.artist.name}</div>
                        <div>아티스트링크 : {obj.artist.url}</div>
                        <div><img src={obj.image[0]['#text']} /></div>
                    </div>
            })}
        </div>
    )
}

export default Music