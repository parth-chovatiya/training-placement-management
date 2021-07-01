import React from "react";
import infosys from "../image/infosys.png";
import LandT from "../image/L&T.jpg";
import atul from "../image/atul.jpg";
import Tech_Mahindra from "../image/Tech_Mahindra.png";
import INFOSTRETCH from "../image/INFOSTRETCH.jpeg";
import GEDEON_RICHTER from "../image/GEDEON_RICHTER.jpg";
import windowmaker from "../image/windowmaker.png";
import EXXAT_SYSTEMS from "../image/EXXAT_SYSTEMS.png";
import QUANTA_PROCESS from "../image/QUANTA_PROCESS.png";
import BAR from "../image/BAR.jpg";
import capgemini from "../image/capgemini.jpg";
import EInfochips from "../image/EInfochips.png";
import evo from "../image/evo.png";
import JSPL from "../image/JSPL.jpg";
import LARSEN_TOUBRO from "../image/LARSEN_TOUBRO.png";
import spec from "../image/spec.png";
import Tata from "../image/Tata.png";
import Torrent from "../image/Torrent.png";
import Universal from "../image/Universal.gif";
import volansys from "../image/volansys.png";

import classes from "./Recruiters.module.css";

const Recruiters = () => {
  return (
    <>
      <h1>Associated Recruiters</h1>
      <hr />
      <br />
      <div className={`${classes['image-container']}`}>
        <div className={`${classes.row} ${classes['row-1']}`}>
          <img src={infosys} alt="Infosys" srcset="" />
          <img src={LandT} alt="L&T" srcset="" />
          <img src={atul} alt="atul" srcset="" />
          <img src={Tech_Mahindra} alt="Tech_Mahindra" srcset="" />
        </div>
        <hr />
        <div className={`${classes.row} ${classes['row-2']}`}>
          <img src={INFOSTRETCH} alt="INFOSTRETCH" srcset="" />
          <img src={GEDEON_RICHTER} alt="GEDEON_RICHTER" srcset="" />
          <img src={windowmaker} alt="windowmaker" srcset="" />
          <img src={EXXAT_SYSTEMS} alt="EXXAT_SYSTEMS" srcset="" />
        </div>
        <hr />
        <div className={`${classes.row} ${classes['row-3']}`}>
          <img src={QUANTA_PROCESS} alt="QUANTA_PROCESS" srcset="" />
          <img src={BAR} alt="BAR" srcset="" />
          <img src={capgemini} alt="capgemini" srcset="" />
          <img src={EInfochips} alt="EInfochips" srcset="" />
        </div>
        <hr />
        <div className={`${classes.row} ${classes['row-4']}`}>
          <img src={evo} alt="evo" srcset="" />
          <img src={LARSEN_TOUBRO} alt="LARSEN_TOUBRO" srcset="" />
          <img src={spec} alt="spec" srcset="" />
          <img src={JSPL} alt="JSPL" srcset="" />
        </div>
        <hr />
        <div className={`${classes.row} ${classes['row-5']}`}>
          <img src={Tata} alt="Tata" srcset="" />
          <img src={Torrent} alt="Torrent" srcset="" />
          <img src={Universal} alt="Universal" srcset="" />
          <img src={volansys} alt="volansys" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Recruiters;
