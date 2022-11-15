import React from "react";

import classes from "./CampusMoment.module.css";

const CampusMoment = () => {
  return (
    <div className={classes.content}>
      <h2>Campus Beautiful Moments</h2>
      <div className={classes.col}>
        <div className={`${classes.row} ${classes["row-1"]}`}>
          <iframe
            width="350"
            height="230"
            src="https://www.youtube.com/embed/xbD9peQYeFw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${classes.row} ${classes["row-2"]}`}>
          <iframe
            width="350"
            height="230"
            src="https://www.youtube.com/embed/hqFIUhV8iA0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={`${classes.row} ${classes["row-3"]}`}>
          <iframe
            width="350"
            height="230"
            src="https://www.youtube.com/embed/ftZTccYX9oA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CampusMoment;
