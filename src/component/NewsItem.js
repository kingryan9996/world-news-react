import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const NewsItem = ({ item, idx }) => {
  console.log(idx % 10);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.15 * (idx % 10),
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="newsItem"
      key={"news" + idx}
    >
      <h3>Title : {item.headline.main}</h3>
      <p style={{ overflow: "hidden" }}>{item.snippet}</p>
      <span>pub_date : {item.pub_date}</span>
      <a href={item.web_url}>Learn More</a>
    </motion.div>
  );
};

export default NewsItem;
