import React from "react";
import { motion } from "framer-motion";
import "../App.scss";

const NewsItem = ({ item, idx }) => {
  if (item.abstract != "")
    //console.log(idx % 10);
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
        style={{
          margin: "0 3% 3%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h4 style={{ fontWeight: "600" }}>
          {item.headline.main.substring(0, 20) + "..."}
        </h4>
        <p style={{ overflow: "scroll" }}>
          {item.abstract.substring(0, 100) + "..."}
        </p>
        <div
          className="moreLearn"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>{item.pub_date.substring(0, 10)}</div>
          <button style={{ border: "none", background: "none" }}>
            <a href={item.web_url}>Learn More</a>
          </button>
        </div>
      </motion.div>
    );
};

export default NewsItem;
