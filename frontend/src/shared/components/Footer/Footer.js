import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import classes from "./Footer.module.css";

const Footer = () => {
  const items = [];
  for (var i = 0; i < 128; i++) {
    items.push(
      <div key={i}
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
        <div className={classes.bubbles}>{items}</div>
        <div className={classes.content}>
          <div className={classes.col}>
            <div className={`${classes.row} ${classes["row-1"]}`}>
              <div className={classes.info}>
                <div className={`${classes["row-1-1"]}`}>
                  <b className={classes.title}>ASSOCIATIONS</b>
                  <Link to="/">Home</Link>
                  <Link to="/placements">Placement</Link>
                  <Link to="/student/login">Login as Student</Link>
                  <Link to="/company/login">Login as Company</Link>
                  <Link to="/aboutus">About Us</Link>
                </div>

                <div className={`${classes["row-1-2"]}`}>
                  <b className={classes.title}>Contact Us</b>
                  <p>Veer Narmad South Gujarat University</p>
                  <p>Post Box No. 20, </p>
                  <p>Bharthana, Surat</p>
                  <p>Dist: Surat(Gujarat) India</p>
                  <p>Telephone: +91 (0261) 2388888</p>
                  <p>Email Id : info@vnsgu.ac.in</p>
                </div>
              </div>
              <div className={classes.social}>
                <FacebookIcon style={{ color: "white", fontSize: "40" }} />
                <InstagramIcon style={{ color: "white", fontSize: "40" }} />
                <LinkedInIcon style={{ color: "white", fontSize: "40" }} />
                <YouTubeIcon style={{ color: "white", fontSize: "40" }} />
                <TwitterIcon style={{ color: "white", fontSize: "40" }} />
              </div>
            </div>

            <div className={`${classes.row} ${classes["row-2"]}`}>
              <b className={classes.title}>Virtual Tour</b>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.971697730119!2d72.78099961485658!3d21.153524585930935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04df15a760c8d%3A0x202f5132f3a6aa2d!2sVeer%20Narmad%20South%20Gujarat%20University!5e0!3m2!1sen!2sin!4v1662527775724!5m2!1sen!2sin" width="400" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
