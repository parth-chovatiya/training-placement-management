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
            src="https://www.youtube.com/embed/FvJe3KbXXio"
            title="Veer Narmad South Gujarat University | VNSGU | Surat Gujarat | વીર નર્મદ સાઉથ ગુજરાત યુનીવર્સીટી"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={`${classes.row} ${classes["row-2"]}`}>
          <iframe
            width="350"
            height="230"
            src="https://www.youtube.com/embed/in_ozimbCio"
            title="Veer Narmad South Gujarat University - Promotional Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={`${classes.row} ${classes["row-3"]}`}>
          <iframe
            width="350"
            height="230"
            src="https://www.youtube.com/embed/QCWne8-fiKA"
            title="Happy Diwali And New Year wishes from Dr. Kishorsinh N. Chavda, Vice Chancellor - VNSGU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CampusMoment;
