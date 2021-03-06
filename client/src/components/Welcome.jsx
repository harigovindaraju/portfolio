import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import Preloader from "./Preloader";
import { Link } from "react-router-dom";

export default function Welcome() {
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, []);

  const [loader, setloader] = useState(true);
  return loader ? (
    <Preloader />
  ) : (
    <motion.div animate={{ stdDeviation: [0, 5, 0] }} className="welcomePage">
      <div className="logo">
        <span className="left">{"<"}</span>HARIHARAN
        <span className="right">{"/>"}</span>
        <div className="text">
          <span className="word">Full Stack </span>
          <span className="web">Developer</span>
        </div>
      </div>
      <div className="rapper">
        <div className="btn-group">
          <Link className="neon btn btn--animated" to="/about">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Welcome Me
          </Link>
          <a className="neon btn btn--animated" href="./resume/hariharan.pdf">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Resume
          </a>
          <Link className="neon btn btn--animated" to="/contact">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Get touch
          </Link>
        </div>
        <div className="profile_pic">
          <LazyLoadImage
            src="images/hari.jpg"
            alt="hari govindaraju"
            effect="blur"
            delayTime={7000}
          />
          {/* <img src="images/hari.jpg" alt="err" /> */}
        </div>
      </div>
    </motion.div>
  );
}
