import React, { useContext, useState } from 'react'
import { MyC } from '../MyContext'
import { Link } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import WorldMap from './WorldMap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {

    const { } = useContext(MyC)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='Navbar'>
            <div>
                <Modal style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-30%)' }} show={show} onHide={handleClose}>
                    <WorldMap setShow={setShow} />
                </Modal>
            </div>
            <FontAwesomeIcon icon={faEarthAmericas} onClick={handleShow} />
            <h6>Navbar</h6>
        </div >

    )
}

export default Navbar