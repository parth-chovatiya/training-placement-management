import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

import UDAAN18 from "../image/UDAAN18.jpg";
import bvm_reunion2017 from "../image/bvm_reunion2017.jpg";
import bvm from "../image/bvm.jpg";

import classes from "./Carousel.module.css";

export default function Example(props) {
  var items = [
    {
      img: <img src={bvm} alt="bvm" width="100%" height="580px" />,
      name: "Veer Narmad South Gujarat University",
    },
    {
      img: <img src={UDAAN18} alt="AgniPath" width="100%" height="580px" />,
      name: "AgniPath",
    },
    {
      img: (
        <img
          src={bvm_reunion2017}
          alt="bvm_reunion2017"
          width="100%"
          height="580px"
        />
      ),
      name: "VNSGU Dance Competition",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <div className={classes.img}>{props.item.img}</div>
      <h2 className={classes.name}>{props.item.name}</h2>
    </Paper>
  );
}
