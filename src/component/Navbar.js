import React, { useContext } from 'react'
import { MyC } from '../MyContext'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {

    const { } = useContext(MyC)

    return (
        <div className='Navbar'>
            <h2>Navbar</h2>
            <Link to='/'>첫화면</Link>
            <Link to='/login'>로그인</Link>
            <h1 style={{ marginLeft: 250, textAlign: 'center', color: 'coral', fontSize: '5rem' }}>World News</h1>
        </div >

    )
}

export default Navbar