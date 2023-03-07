import React, { useContext, useState } from "react";
import { MyC } from "../MyContext";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import WorldMap from "./WorldMap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Navbar = () => {
  const {} = useContext(MyC);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  if (show) {
    //window.addEventListener("mouseover", setShow(false));
    console.log("showwhow");
  }

  return (
    <div className="Navbar">
      <div>
        <div
          onClick={() => {
            setShow(false);
          }}
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 100000,
            background: "rgba(0,0,0,0.6)",
            display: show ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: "0%",
            left: "0%",
            //transform: "translate(-50%,-30%)",
          }}
        >
          <WorldMap setShow={setShow} />
        </div>
      </div>
      <FontAwesomeIcon
        style={{ fontSize: "1.5rem" }}
        icon={faEarthAmericas}
        onClick={() => {
          setShow(true);
        }}
      />
      <span style={{ textAlign: "center", fontSize: "0.7rem" }}>MORE</span>
    </div>
  );
};

export default Navbar;
