import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  const items = [];
  for (var i = 0; i < 128; i++) {
    items.push(
      <div
        className={classes.bubble}
        style={{
          "--size": `${2 + Math.random() * 4}rem`,
          distance: `${6 + Math.random() * 4}rem`,
          "--position": `${-5 + Math.random() * 110}%`,
          "--time": `${2 + Math.random() * 2}s`,
          "--delay": `${-1 * (2 + Math.random() * 2)}s`,
        }}
      ></div>
    );
  }

  return (
    <>
      <div className={classes.footer}>
        {/* <div className={classes.bubbles}>{items}</div> */}
        <div className={classes.content}>
          <div className={classes.col}>
            <div className={`${classes.row} ${classes['row-1']}`}>
              <b>ASSOCIATIONS</b>
              <Link to="/">Home</Link>
              <Link to="/placements">Placement</Link>
              <Link to="/student/login">Login as Student</Link>
              <Link to="/company/login">Login as Company</Link>
              <Link to="/aboutus">About Us</Link>
            </div>
            <div className={`${classes.row} ${classes['row-2']}`}>
              <b>Contact Us</b>
              <p>Birla Vishvakarma Mahavidyalaya Engineering college</p>
              <p>Post Box No. 20, </p>
              <p>Vallabh Vidyanagar, 388 120</p>
              <p>Dist: Anand(Gujarat) India</p>
              <p>Telephone: +91-2692-230104</p>
              <p>Email Id : principal@bvmengineering.ac.in</p>
            </div>
            <div className={`${classes.row} ${classes['row-3']}`}>
              <b>Virtual Tour</b>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.710404419791!2d72.92163631486343!3d22.552518539391208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e74c03b7749%3A0xab364c66fd4834c!2sBirla%20Vishvakarma%20Mahavidyalaya%20(BVM)!5e0!3m2!1sen!2sin!4v1625226092971!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="blob"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Footer;
