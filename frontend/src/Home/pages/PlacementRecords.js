import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const func = (index) => {
  if (index === 0) {
    return [
      { no: "1", NameofIndustries: "TCS Digital", packege: 7, placed: 6},
      { no: "2", NameofIndustries: "Crest Datasystems", packege: '4.5 - 6.5', placed: 28 },
      { no: "3", NameofIndustries: "Kothari Infotech", packege: 4.2, placed: 3 },
      { no: "4", NameofIndustries: "Perfect VIP", packege: 3.1, placed: 2 },
      { no: "5", NameofIndustries: "Volansys", packege: 3, placed: 3 },
      { no: "6", NameofIndustries: "Argusoft", packege: '4.12 - 5', placed: 0 },
      { no: "7", NameofIndustries: "eInfochips", packege: 3.6, placed: 9},
      { no: "8", NameofIndustries: "Tatvasoft", packege: '2.28 - 3.6', placed: 7 },
      { no: "9", NameofIndustries: "Meditab", packege: '3.2 - 5', placed: 6 },
      { no: "10", NameofIndustries: "Maruti Techlabs", packege: 3.5, placed: 4 },
      { no: "11", NameofIndustries: "Cybage", packege: '4 - 4.5', placed: 4 },
      { no: "12", NameofIndustries: "Webmob Tech", packege: '1.8 - 2.4', placed: 1 },
      { no: "13", NameofIndustries: "TCS Ninja", packege: 3.3, placed: 35 },
      { no: "14", NameofIndustries: "Evosys", packege: 2.3, placed: 3 },
      { no: "15", NameofIndustries: "MG Motors", packege: 6, placed: 3 },
      { no: "16", NameofIndustries: "Streebo", packege: '2.4 - 3.4', placed: 1 },
      { no: "17", NameofIndustries: "PEaaS - a Finablr company", packege: '3 - 4', placed: 2 },
      { no: "18", NameofIndustries: "AIMDek Tehnologies", packege: '1.5 - 3', placed: 0 },
      { no: "19", NameofIndustries: "Reliance Industries Ltd.", packege: 7.5, placed: 1 },
      { no: "20", NameofIndustries: "Collabera", packege: 2.52, placed: 0 },
      { no: "21", NameofIndustries: "Infostretch", packege: 3, placed: 1 },
      { no: "22", NameofIndustries: "Capgemini", packege: 3.8, placed: 2 },
      { no: "23", NameofIndustries: "JARO Education", packege: 12, placed: 2 },
      { no: "24", NameofIndustries: "Zeus Learning", packege: 5.5, placed: 5 },
      { no: "25", NameofIndustries: "Matrix Comsec", packege: 3.5, placed: 0 },
      { no: "26", NameofIndustries: "L&T Construction", packege: 6.55, placed: 1 },
      { no: "27", NameofIndustries: "Gateway Group of Companies", packege: '4.1 - 4.6', placed: 0 },
      { no: "28", NameofIndustries: "L&T Powa", packege: '3.5 - 5', placed: 2 },
      { no: "29", NameofIndustries: "Maxim Integrated", packege: 4.5, placed: 4 },
      { no: "30", NameofIndustries: "Atul Chemical", packege: 4.2, placed: 6 },
      { no: "31", NameofIndustries: "Linde", packege: 2.5, placed: 1},
      { no: "32", NameofIndustries: "ML Veda", packege: 5, placed: 3 },
      { no: "33", NameofIndustries: "Tech Innovaters", packege: 2.5, placed: 5 },
      { no: "34", NameofIndustries: "Geocarte", packege: 3, placed: 1 },
      { no: "35", NameofIndustries: "Infinite Civil Solutions", packege: 2.5, placed: 2 },
      { no: "36", NameofIndustries: "RKC Infrabuilt", packege: 4, placed: 4 },
      { no: "37", NameofIndustries: "Torrent Power (Sabarmati)", packege: 3.25, placed: 1 },
      { no: "38", NameofIndustries: "Hidden Brains", packege: 2.64, placed: 7 },
      { no: "39", NameofIndustries: "Pressue Jet Systems", packege: 2.7, placed: 5 },
      { no: "40", NameofIndustries: "Torrent Power (Sugen)", packege: 3.25, placed: 1 },
      { no: "41", NameofIndustries: "L&T Technology Services ", packege: 2.75, placed: 8 },
      { no: "42", NameofIndustries: "Viviana Power Tech. ", packege: 1.8, placed: 4 },
      { no: "43", NameofIndustries: "Techno Electromech", packege: 5.2, placed: 5 },
      { no: "44", NameofIndustries: "Alien", packege: 3.2, placed: 6 },
      { no: "45", NameofIndustries: "Wesige", packege: 5.6, placed: 1 },
      { no: "46", NameofIndustries: "Shaguna Foods", packege: 1.2, placed: 2 },
      { no: "47", NameofIndustries: "Cognizant", packege: 6.4, placed: 6 },
      { no: "48", NameofIndustries: "Juspay", packege: 1.3, placed: 0 },
      { no: "49", NameofIndustries: "Tata chemicals", packege: 1.8, placed: 3 },
      { no: "50", NameofIndustries: "ERDA", packege: 5.4, placed: 6 },
      { no: "51", NameofIndustries: "Voltas - Tata enterprise", packege: 1.5, placed: 1 },
      { no: "52", NameofIndustries: "Zahn Tech Engineering", packege: 5.2, placed: 1 },
    ];
  } else if (index === 1) {
    return [
      { no: "1", NameofIndustries: "TCS Digital", packege: 7, placed: 6},
      { no: "2", NameofIndustries: "Crest Datasystems", packege: '4.5 - 6.5', placed: 28 },
      { no: "3", NameofIndustries: "Kothari Infotech", packege: 4.2, placed: 3 },
      { no: "4", NameofIndustries: "Perfect VIP", packege: 3.1, placed: 2 },
      { no: "5", NameofIndustries: "Volansys", packege: 3, placed: 3 },
      { no: "6", NameofIndustries: "Argusoft", packege: '4.12 - 5', placed: 0 },
      { no: "7", NameofIndustries: "eInfochips", packege: 3.6, placed: 9},
      { no: "8", NameofIndustries: "Tatvasoft", packege: '2.28 - 3.6', placed: 7 },
      { no: "9", NameofIndustries: "Meditab", packege: '3.2 - 5', placed: 6 },
      { no: "10", NameofIndustries: "Maruti Techlabs", packege: 3.5, placed: 4 },
      { no: "11", NameofIndustries: "Cybage", packege: '4 - 4.5', placed: 4 },
      { no: "12", NameofIndustries: "Webmob Tech", packege: '1.8 - 2.4', placed: 1 },
      { no: "13", NameofIndustries: "TCS Ninja", packege: 3.3, placed: 35 },
      { no: "14", NameofIndustries: "Evosys", packege: 2.3, placed: 3 },
      { no: "15", NameofIndustries: "MG Motors", packege: 6, placed: 3 },
      { no: "16", NameofIndustries: "Streebo", packege: '2.4 - 3.4', placed: 1 },
      { no: "17", NameofIndustries: "PEaaS - a Finablr company", packege: '3 - 4', placed: 2 },
      { no: "18", NameofIndustries: "AIMDek Tehnologies", packege: '1.5 - 3', placed: 0 },
      { no: "19", NameofIndustries: "Reliance Industries Ltd.", packege: 7.5, placed: 1 },
      { no: "20", NameofIndustries: "Collabera", packege: 2.52, placed: 0 },
      { no: "21", NameofIndustries: "Infostretch", packege: 3, placed: 1 },
      { no: "22", NameofIndustries: "Capgemini", packege: 3.8, placed: 2 },
      { no: "23", NameofIndustries: "JARO Education", packege: 12, placed: 2 },
      { no: "24", NameofIndustries: "Zeus Learning", packege: 5.5, placed: 5 },
      { no: "25", NameofIndustries: "Matrix Comsec", packege: 3.5, placed: 0 },
      { no: "26", NameofIndustries: "L&T Construction", packege: 6.55, placed: 1 },
      { no: "27", NameofIndustries: "Gateway Group of Companies", packege: '4.1 - 4.6', placed: 0 },
      { no: "28", NameofIndustries: "L&T Powa", packege: '3.5 - 5', placed: 2 },
      { no: "29", NameofIndustries: "Maxim Integrated", packege: 4.5, placed: 4 },
      { no: "30", NameofIndustries: "Atul Chemical", packege: 4.2, placed: 6 },
      { no: "31", NameofIndustries: "Linde", packege: 2.5, placed: 1},
      { no: "32", NameofIndustries: "ML Veda", packege: 5, placed: 3 },
      { no: "33", NameofIndustries: "Tech Innovaters", packege: 2.5, placed: 5 },
      { no: "34", NameofIndustries: "Geocarte", packege: 3, placed: 1 },
      { no: "35", NameofIndustries: "Infinite Civil Solutions", packege: 2.5, placed: 2 },
      { no: "36", NameofIndustries: "RKC Infrabuilt", packege: 4, placed: 4 },
      { no: "37", NameofIndustries: "Torrent Power (Sabarmati)", packege: 3.25, placed: 1 },
      { no: "38", NameofIndustries: "Hidden Brains", packege: 2.64, placed: 7 },
      { no: "39", NameofIndustries: "Pressue Jet Systems", packege: 2.7, placed: 5 },
      { no: "40", NameofIndustries: "Torrent Power (Sugen)", packege: 3.25, placed: 1 },
      { no: "41", NameofIndustries: "L&T Technology Services ", packege: 2.75, placed: 8 },
      { no: "42", NameofIndustries: "Viviana Power Tech. ", packege: 1.8, placed: 4 },
      { no: "43", NameofIndustries: "Techno Electromech", packege: 5.2, placed: 5 },
      { no: "44", NameofIndustries: "Alien", packege: 3.2, placed: 6 },
      { no: "45", NameofIndustries: "Wesige", packege: 5.6, placed: 1 },
      { no: "46", NameofIndustries: "Shaguna Foods", packege: 1.2, placed: 2 },
      { no: "47", NameofIndustries: "Cognizant", packege: 6.4, placed: 6 },
      { no: "48", NameofIndustries: "Juspay", packege: 1.3, placed: 0 },
      { no: "49", NameofIndustries: "Tata chemicals", packege: 1.8, placed: 3 },
      { no: "50", NameofIndustries: "ERDA", packege: 5.4, placed: 6 },
      { no: "51", NameofIndustries: "Voltas - Tata enterprise", packege: 1.5, placed: 1 },
      { no: "52", NameofIndustries: "Zahn Tech Engineering", packege: 5.2, placed: 1 },
    ];
  } else if (index === 2) {
    return [
      { no: "1", NameofIndustries: "TCS Digital", packege: 7, placed: 6},
      { no: "2", NameofIndustries: "Crest Datasystems", packege: '4.5 - 6.5', placed: 28 },
      { no: "3", NameofIndustries: "Kothari Infotech", packege: 4.2, placed: 3 },
      { no: "4", NameofIndustries: "Perfect VIP", packege: 3.1, placed: 2 },
      { no: "5", NameofIndustries: "Volansys", packege: 3, placed: 3 },
      { no: "6", NameofIndustries: "Argusoft", packege: '4.12 - 5', placed: 0 },
      { no: "7", NameofIndustries: "eInfochips", packege: 3.6, placed: 9},
      { no: "8", NameofIndustries: "Tatvasoft", packege: '2.28 - 3.6', placed: 7 },
      { no: "9", NameofIndustries: "Meditab", packege: '3.2 - 5', placed: 6 },
      { no: "10", NameofIndustries: "Maruti Techlabs", packege: 3.5, placed: 4 },
      { no: "11", NameofIndustries: "Cybage", packege: '4 - 4.5', placed: 4 },
      { no: "12", NameofIndustries: "Webmob Tech", packege: '1.8 - 2.4', placed: 1 },
      { no: "13", NameofIndustries: "TCS Ninja", packege: 3.3, placed: 35 },
      { no: "14", NameofIndustries: "Evosys", packege: 2.3, placed: 3 },
      { no: "15", NameofIndustries: "MG Motors", packege: 6, placed: 3 },
      { no: "16", NameofIndustries: "Streebo", packege: '2.4 - 3.4', placed: 1 },
      { no: "17", NameofIndustries: "PEaaS - a Finablr company", packege: '3 - 4', placed: 2 },
      { no: "18", NameofIndustries: "AIMDek Tehnologies", packege: '1.5 - 3', placed: 0 },
      { no: "19", NameofIndustries: "Reliance Industries Ltd.", packege: 7.5, placed: 1 },
      { no: "20", NameofIndustries: "Collabera", packege: 2.52, placed: 0 },
      { no: "21", NameofIndustries: "Infostretch", packege: 3, placed: 1 },
      { no: "22", NameofIndustries: "Capgemini", packege: 3.8, placed: 2 },
      { no: "23", NameofIndustries: "JARO Education", packege: 12, placed: 2 },
      { no: "24", NameofIndustries: "Zeus Learning", packege: 5.5, placed: 5 },
      { no: "25", NameofIndustries: "Matrix Comsec", packege: 3.5, placed: 0 },
      { no: "26", NameofIndustries: "L&T Construction", packege: 6.55, placed: 1 },
      { no: "27", NameofIndustries: "Gateway Group of Companies", packege: '4.1 - 4.6', placed: 0 },
      { no: "28", NameofIndustries: "L&T Powa", packege: '3.5 - 5', placed: 2 },
      { no: "29", NameofIndustries: "Maxim Integrated", packege: 4.5, placed: 4 },
      { no: "30", NameofIndustries: "Atul Chemical", packege: 4.2, placed: 6 },
      { no: "31", NameofIndustries: "Linde", packege: 2.5, placed: 1},
      { no: "32", NameofIndustries: "ML Veda", packege: 5, placed: 3 },
      { no: "33", NameofIndustries: "Tech Innovaters", packege: 2.5, placed: 5 },
      { no: "34", NameofIndustries: "Geocarte", packege: 3, placed: 1 },
      { no: "35", NameofIndustries: "Infinite Civil Solutions", packege: 2.5, placed: 2 },
      { no: "36", NameofIndustries: "RKC Infrabuilt", packege: 4, placed: 4 },
      { no: "37", NameofIndustries: "Torrent Power (Sabarmati)", packege: 3.25, placed: 1 },
      { no: "38", NameofIndustries: "Hidden Brains", packege: 2.64, placed: 7 },
      { no: "39", NameofIndustries: "Pressue Jet Systems", packege: 2.7, placed: 5 },
      { no: "40", NameofIndustries: "Torrent Power (Sugen)", packege: 3.25, placed: 1 },
      { no: "41", NameofIndustries: "L&T Technology Services ", packege: 2.75, placed: 8 },
      { no: "42", NameofIndustries: "Viviana Power Tech. ", packege: 1.8, placed: 4 },
      { no: "43", NameofIndustries: "Techno Electromech", packege: 5.2, placed: 5 },
      { no: "44", NameofIndustries: "Alien", packege: 3.2, placed: 6 },
      { no: "45", NameofIndustries: "Wesige", packege: 5.6, placed: 1 },
      { no: "46", NameofIndustries: "Shaguna Foods", packege: 1.2, placed: 2 },
      { no: "47", NameofIndustries: "Cognizant", packege: 6.4, placed: 6 },
      { no: "48", NameofIndustries: "Juspay", packege: 1.3, placed: 0 },
      { no: "49", NameofIndustries: "Tata chemicals", packege: 1.8, placed: 3 },
      { no: "50", NameofIndustries: "ERDA", packege: 5.4, placed: 6 },
      { no: "51", NameofIndustries: "Voltas - Tata enterprise", packege: 1.5, placed: 1 },
      { no: "52", NameofIndustries: "Zahn Tech Engineering", packege: 5.2, placed: 1 },
    ];
  } else if (index === 3) {
    return [
      { no: "1", NameofIndustries: "TCS Digital", packege: 7, placed: 6},
      { no: "2", NameofIndustries: "Crest Datasystems", packege: '4.5 - 6.5', placed: 28 },
      { no: "3", NameofIndustries: "Kothari Infotech", packege: 4.2, placed: 3 },
      { no: "4", NameofIndustries: "Perfect VIP", packege: 3.1, placed: 2 },
      { no: "5", NameofIndustries: "Volansys", packege: 3, placed: 3 },
      { no: "6", NameofIndustries: "Argusoft", packege: '4.12 - 5', placed: 0 },
      { no: "7", NameofIndustries: "eInfochips", packege: 3.6, placed: 9},
      { no: "8", NameofIndustries: "Tatvasoft", packege: '2.28 - 3.6', placed: 7 },
      { no: "9", NameofIndustries: "Meditab", packege: '3.2 - 5', placed: 6 },
      { no: "10", NameofIndustries: "Maruti Techlabs", packege: 3.5, placed: 4 },
      { no: "11", NameofIndustries: "Cybage", packege: '4 - 4.5', placed: 4 },
      { no: "12", NameofIndustries: "Webmob Tech", packege: '1.8 - 2.4', placed: 1 },
      { no: "13", NameofIndustries: "TCS Ninja", packege: 3.3, placed: 35 },
      { no: "14", NameofIndustries: "Evosys", packege: 2.3, placed: 3 },
      { no: "15", NameofIndustries: "MG Motors", packege: 6, placed: 3 },
      { no: "16", NameofIndustries: "Streebo", packege: '2.4 - 3.4', placed: 1 },
      { no: "17", NameofIndustries: "PEaaS - a Finablr company", packege: '3 - 4', placed: 2 },
      { no: "18", NameofIndustries: "AIMDek Tehnologies", packege: '1.5 - 3', placed: 0 },
      { no: "19", NameofIndustries: "Reliance Industries Ltd.", packege: 7.5, placed: 1 },
      { no: "20", NameofIndustries: "Collabera", packege: 2.52, placed: 0 },
      { no: "21", NameofIndustries: "Infostretch", packege: 3, placed: 1 },
      { no: "22", NameofIndustries: "Capgemini", packege: 3.8, placed: 2 },
      { no: "23", NameofIndustries: "JARO Education", packege: 12, placed: 2 },
      { no: "24", NameofIndustries: "Zeus Learning", packege: 5.5, placed: 5 },
      { no: "25", NameofIndustries: "Matrix Comsec", packege: 3.5, placed: 0 },
      { no: "26", NameofIndustries: "L&T Construction", packege: 6.55, placed: 1 },
      { no: "27", NameofIndustries: "Gateway Group of Companies", packege: '4.1 - 4.6', placed: 0 },
      { no: "28", NameofIndustries: "L&T Powa", packege: '3.5 - 5', placed: 2 },
      { no: "29", NameofIndustries: "Maxim Integrated", packege: 4.5, placed: 4 },
      { no: "30", NameofIndustries: "Atul Chemical", packege: 4.2, placed: 6 },
      { no: "31", NameofIndustries: "Linde", packege: 2.5, placed: 1},
      { no: "32", NameofIndustries: "ML Veda", packege: 5, placed: 3 },
      { no: "33", NameofIndustries: "Tech Innovaters", packege: 2.5, placed: 5 },
      { no: "34", NameofIndustries: "Geocarte", packege: 3, placed: 1 },
      { no: "35", NameofIndustries: "Infinite Civil Solutions", packege: 2.5, placed: 2 },
      { no: "36", NameofIndustries: "RKC Infrabuilt", packege: 4, placed: 4 },
      { no: "37", NameofIndustries: "Torrent Power (Sabarmati)", packege: 3.25, placed: 1 },
      { no: "38", NameofIndustries: "Hidden Brains", packege: 2.64, placed: 7 },
      { no: "39", NameofIndustries: "Pressue Jet Systems", packege: 2.7, placed: 5 },
      { no: "40", NameofIndustries: "Torrent Power (Sugen)", packege: 3.25, placed: 1 },
      { no: "41", NameofIndustries: "L&T Technology Services ", packege: 2.75, placed: 8 },
      { no: "42", NameofIndustries: "Viviana Power Tech. ", packege: 1.8, placed: 4 },
      { no: "43", NameofIndustries: "Techno Electromech", packege: 5.2, placed: 5 },
      { no: "44", NameofIndustries: "Alien", packege: 3.2, placed: 6 },
      { no: "45", NameofIndustries: "Wesige", packege: 5.6, placed: 1 },
      { no: "46", NameofIndustries: "Shaguna Foods", packege: 1.2, placed: 2 },
      { no: "47", NameofIndustries: "Cognizant", packege: 6.4, placed: 6 },
      { no: "48", NameofIndustries: "Juspay", packege: 1.3, placed: 0 },
      { no: "49", NameofIndustries: "Tata chemicals", packege: 1.8, placed: 3 },
      { no: "50", NameofIndustries: "ERDA", packege: 5.4, placed: 6 },
      { no: "51", NameofIndustries: "Voltas - Tata enterprise", packege: 1.5, placed: 1 },
      { no: "52", NameofIndustries: "Zahn Tech Engineering", packege: 5.2, placed: 1 },
    ];
  } else if (index === 4) {
    return [
      { no: "1", NameofIndustries: "TCS Digital", packege: 7, placed: 6},
      { no: "2", NameofIndustries: "Crest Datasystems", packege: '4.5 - 6.5', placed: 28 },
      { no: "3", NameofIndustries: "Kothari Infotech", packege: 4.2, placed: 3 },
      { no: "4", NameofIndustries: "Perfect VIP", packege: 3.1, placed: 2 },
      { no: "5", NameofIndustries: "Volansys", packege: 3, placed: 3 },
      { no: "6", NameofIndustries: "Argusoft", packege: '4.12 - 5', placed: 0 },
      { no: "7", NameofIndustries: "eInfochips", packege: 3.6, placed: 9},
      { no: "8", NameofIndustries: "Tatvasoft", packege: '2.28 - 3.6', placed: 7 },
      { no: "9", NameofIndustries: "Meditab", packege: '3.2 - 5', placed: 6 },
      { no: "10", NameofIndustries: "Maruti Techlabs", packege: 3.5, placed: 4 },
      { no: "11", NameofIndustries: "Cybage", packege: '4 - 4.5', placed: 4 },
      { no: "12", NameofIndustries: "Webmob Tech", packege: '1.8 - 2.4', placed: 1 },
      { no: "13", NameofIndustries: "TCS Ninja", packege: 3.3, placed: 35 },
      { no: "14", NameofIndustries: "Evosys", packege: 2.3, placed: 3 },
      { no: "15", NameofIndustries: "MG Motors", packege: 6, placed: 3 },
      { no: "16", NameofIndustries: "Streebo", packege: '2.4 - 3.4', placed: 1 },
      { no: "17", NameofIndustries: "PEaaS - a Finablr company", packege: '3 - 4', placed: 2 },
      { no: "18", NameofIndustries: "AIMDek Tehnologies", packege: '1.5 - 3', placed: 0 },
      { no: "19", NameofIndustries: "Reliance Industries Ltd.", packege: 7.5, placed: 1 },
      { no: "20", NameofIndustries: "Collabera", packege: 2.52, placed: 0 },
      { no: "21", NameofIndustries: "Infostretch", packege: 3, placed: 1 },
      { no: "22", NameofIndustries: "Capgemini", packege: 3.8, placed: 2 },
      { no: "23", NameofIndustries: "JARO Education", packege: 12, placed: 2 },
      { no: "24", NameofIndustries: "Zeus Learning", packege: 5.5, placed: 5 },
      { no: "25", NameofIndustries: "Matrix Comsec", packege: 3.5, placed: 0 },
      { no: "26", NameofIndustries: "L&T Construction", packege: 6.55, placed: 1 },
      { no: "27", NameofIndustries: "Gateway Group of Companies", packege: '4.1 - 4.6', placed: 0 },
      { no: "28", NameofIndustries: "L&T Powa", packege: '3.5 - 5', placed: 2 },
      { no: "29", NameofIndustries: "Maxim Integrated", packege: 4.5, placed: 4 },
      { no: "30", NameofIndustries: "Atul Chemical", packege: 4.2, placed: 6 },
      { no: "31", NameofIndustries: "Linde", packege: 2.5, placed: 1},
      { no: "32", NameofIndustries: "ML Veda", packege: 5, placed: 3 },
      { no: "33", NameofIndustries: "Tech Innovaters", packege: 2.5, placed: 5 },
      { no: "34", NameofIndustries: "Geocarte", packege: 3, placed: 1 },
      { no: "35", NameofIndustries: "Infinite Civil Solutions", packege: 2.5, placed: 2 },
      { no: "36", NameofIndustries: "RKC Infrabuilt", packege: 4, placed: 4 },
      { no: "37", NameofIndustries: "Torrent Power (Sabarmati)", packege: 3.25, placed: 1 },
      { no: "38", NameofIndustries: "Hidden Brains", packege: 2.64, placed: 7 },
      { no: "39", NameofIndustries: "Pressue Jet Systems", packege: 2.7, placed: 5 },
      { no: "40", NameofIndustries: "Torrent Power (Sugen)", packege: 3.25, placed: 1 },
      { no: "41", NameofIndustries: "L&T Technology Services ", packege: 2.75, placed: 8 },
      { no: "42", NameofIndustries: "Viviana Power Tech. ", packege: 1.8, placed: 4 },
      { no: "43", NameofIndustries: "Techno Electromech", packege: 5.2, placed: 5 },
      { no: "44", NameofIndustries: "Alien", packege: 3.2, placed: 6 },
      { no: "45", NameofIndustries: "Wesige", packege: 5.6, placed: 1 },
      { no: "46", NameofIndustries: "Shaguna Foods", packege: 1.2, placed: 2 },
      { no: "47", NameofIndustries: "Cognizant", packege: 6.4, placed: 6 },
      { no: "48", NameofIndustries: "Juspay", packege: 1.3, placed: 0 },
      { no: "49", NameofIndustries: "Tata chemicals", packege: 1.8, placed: 3 },
      { no: "50", NameofIndustries: "ERDA", packege: 5.4, placed: 6 },
      { no: "51", NameofIndustries: "Voltas - Tata enterprise", packege: 1.5, placed: 1 },
      { no: "52", NameofIndustries: "Zahn Tech Engineering", packege: 5.2, placed: 1 },
    ];
  } else if (index === 5) {
    return [
      { no: "1", NameofIndustries: "TCS Digital", packege: 7, placed: 6},
      { no: "2", NameofIndustries: "Crest Datasystems", packege: '4.5 - 6.5', placed: 28 },
      { no: "3", NameofIndustries: "Kothari Infotech", packege: 4.2, placed: 3 },
      { no: "4", NameofIndustries: "Perfect VIP", packege: 3.1, placed: 2 },
      { no: "5", NameofIndustries: "Volansys", packege: 3, placed: 3 },
      { no: "6", NameofIndustries: "Argusoft", packege: '4.12 - 5', placed: 0 },
      { no: "7", NameofIndustries: "eInfochips", packege: 3.6, placed: 9},
      { no: "8", NameofIndustries: "Tatvasoft", packege: '2.28 - 3.6', placed: 7 },
      { no: "9", NameofIndustries: "Meditab", packege: '3.2 - 5', placed: 6 },
      { no: "10", NameofIndustries: "Maruti Techlabs", packege: 3.5, placed: 4 },
      { no: "11", NameofIndustries: "Cybage", packege: '4 - 4.5', placed: 4 },
      { no: "12", NameofIndustries: "Webmob Tech", packege: '1.8 - 2.4', placed: 1 },
      { no: "13", NameofIndustries: "TCS Ninja", packege: 3.3, placed: 35 },
      { no: "14", NameofIndustries: "Evosys", packege: 2.3, placed: 3 },
      { no: "15", NameofIndustries: "MG Motors", packege: 6, placed: 3 },
      { no: "16", NameofIndustries: "Streebo", packege: '2.4 - 3.4', placed: 1 },
      { no: "17", NameofIndustries: "PEaaS - a Finablr company", packege: '3 - 4', placed: 2 },
      { no: "18", NameofIndustries: "AIMDek Tehnologies", packege: '1.5 - 3', placed: 0 },
      { no: "19", NameofIndustries: "Reliance Industries Ltd.", packege: 7.5, placed: 1 },
      { no: "20", NameofIndustries: "Collabera", packege: 2.52, placed: 0 },
      { no: "21", NameofIndustries: "Infostretch", packege: 3, placed: 1 },
      { no: "22", NameofIndustries: "Capgemini", packege: 3.8, placed: 2 },
      { no: "23", NameofIndustries: "JARO Education", packege: 12, placed: 2 },
      { no: "24", NameofIndustries: "Zeus Learning", packege: 5.5, placed: 5 },
      { no: "25", NameofIndustries: "Matrix Comsec", packege: 3.5, placed: 0 },
      { no: "26", NameofIndustries: "L&T Construction", packege: 6.55, placed: 1 },
      { no: "27", NameofIndustries: "Gateway Group of Companies", packege: '4.1 - 4.6', placed: 0 },
      { no: "28", NameofIndustries: "L&T Powa", packege: '3.5 - 5', placed: 2 },
      { no: "29", NameofIndustries: "Maxim Integrated", packege: 4.5, placed: 4 },
      { no: "30", NameofIndustries: "Atul Chemical", packege: 4.2, placed: 6 },
      { no: "31", NameofIndustries: "Linde", packege: 2.5, placed: 1},
      { no: "32", NameofIndustries: "ML Veda", packege: 5, placed: 3 },
      { no: "33", NameofIndustries: "Tech Innovaters", packege: 2.5, placed: 5 },
      { no: "34", NameofIndustries: "Geocarte", packege: 3, placed: 1 },
      { no: "35", NameofIndustries: "Infinite Civil Solutions", packege: 2.5, placed: 2 },
      { no: "36", NameofIndustries: "RKC Infrabuilt", packege: 4, placed: 4 },
      { no: "37", NameofIndustries: "Torrent Power (Sabarmati)", packege: 3.25, placed: 1 },
      { no: "38", NameofIndustries: "Hidden Brains", packege: 2.64, placed: 7 },
      { no: "39", NameofIndustries: "Pressue Jet Systems", packege: 2.7, placed: 5 },
      { no: "40", NameofIndustries: "Torrent Power (Sugen)", packege: 3.25, placed: 1 },
      { no: "41", NameofIndustries: "L&T Technology Services ", packege: 2.75, placed: 8 },
      { no: "42", NameofIndustries: "Viviana Power Tech. ", packege: 1.8, placed: 4 },
      { no: "43", NameofIndustries: "Techno Electromech", packege: 5.2, placed: 5 },
      { no: "44", NameofIndustries: "Alien", packege: 3.2, placed: 6 },
      { no: "45", NameofIndustries: "Wesige", packege: 5.6, placed: 1 },
      { no: "46", NameofIndustries: "Shaguna Foods", packege: 1.2, placed: 2 },
      { no: "47", NameofIndustries: "Cognizant", packege: 6.4, placed: 6 },
      { no: "48", NameofIndustries: "Juspay", packege: 1.3, placed: 0 },
      { no: "49", NameofIndustries: "Tata chemicals", packege: 1.8, placed: 3 },
      { no: "50", NameofIndustries: "ERDA", packege: 5.4, placed: 6 },
      { no: "51", NameofIndustries: "Voltas - Tata enterprise", packege: 1.5, placed: 1 },
      { no: "52", NameofIndustries: "Zahn Tech Engineering", packege: 5.2, placed: 1 },
    ];
  } else if (index === 6) {
    return [
      { no: "1", NameofIndustries: "TCS Digital", packege: 7, placed: 6},
      { no: "2", NameofIndustries: "Crest Datasystems", packege: '4.5 - 6.5', placed: 28 },
      { no: "3", NameofIndustries: "Kothari Infotech", packege: 4.2, placed: 3 },
      { no: "4", NameofIndustries: "Perfect VIP", packege: 3.1, placed: 2 },
      { no: "5", NameofIndustries: "Volansys", packege: 3, placed: 3 },
      { no: "6", NameofIndustries: "Argusoft", packege: '4.12 - 5', placed: 0 },
      { no: "7", NameofIndustries: "eInfochips", packege: 3.6, placed: 9},
      { no: "8", NameofIndustries: "Tatvasoft", packege: '2.28 - 3.6', placed: 7 },
      { no: "9", NameofIndustries: "Meditab", packege: '3.2 - 5', placed: 6 },
      { no: "10", NameofIndustries: "Maruti Techlabs", packege: 3.5, placed: 4 },
      { no: "11", NameofIndustries: "Cybage", packege: '4 - 4.5', placed: 4 },
      { no: "12", NameofIndustries: "Webmob Tech", packege: '1.8 - 2.4', placed: 1 },
      { no: "13", NameofIndustries: "TCS Ninja", packege: 3.3, placed: 35 },
      { no: "14", NameofIndustries: "Evosys", packege: 2.3, placed: 3 },
      { no: "15", NameofIndustries: "MG Motors", packege: 6, placed: 3 },
      { no: "16", NameofIndustries: "Streebo", packege: '2.4 - 3.4', placed: 1 },
      { no: "17", NameofIndustries: "PEaaS - a Finablr company", packege: '3 - 4', placed: 2 },
      { no: "18", NameofIndustries: "AIMDek Tehnologies", packege: '1.5 - 3', placed: 0 },
      { no: "19", NameofIndustries: "Reliance Industries Ltd.", packege: 7.5, placed: 1 },
      { no: "20", NameofIndustries: "Collabera", packege: 2.52, placed: 0 },
      { no: "21", NameofIndustries: "Infostretch", packege: 3, placed: 1 },
      { no: "22", NameofIndustries: "Capgemini", packege: 3.8, placed: 2 },
      { no: "23", NameofIndustries: "JARO Education", packege: 12, placed: 2 },
      { no: "24", NameofIndustries: "Zeus Learning", packege: 5.5, placed: 5 },
      { no: "25", NameofIndustries: "Matrix Comsec", packege: 3.5, placed: 0 },
      { no: "26", NameofIndustries: "L&T Construction", packege: 6.55, placed: 1 },
      { no: "27", NameofIndustries: "Gateway Group of Companies", packege: '4.1 - 4.6', placed: 0 },
      { no: "28", NameofIndustries: "L&T Powa", packege: '3.5 - 5', placed: 2 },
      { no: "29", NameofIndustries: "Maxim Integrated", packege: 4.5, placed: 4 },
      { no: "30", NameofIndustries: "Atul Chemical", packege: 4.2, placed: 6 },
      { no: "31", NameofIndustries: "Linde", packege: 2.5, placed: 1},
      { no: "32", NameofIndustries: "ML Veda", packege: 5, placed: 3 },
      { no: "33", NameofIndustries: "Tech Innovaters", packege: 2.5, placed: 5 },
      { no: "34", NameofIndustries: "Geocarte", packege: 3, placed: 1 },
      { no: "35", NameofIndustries: "Infinite Civil Solutions", packege: 2.5, placed: 2 },
      { no: "36", NameofIndustries: "RKC Infrabuilt", packege: 4, placed: 4 },
      { no: "37", NameofIndustries: "Torrent Power (Sabarmati)", packege: 3.25, placed: 1 },
      { no: "38", NameofIndustries: "Hidden Brains", packege: 2.64, placed: 7 },
      { no: "39", NameofIndustries: "Pressue Jet Systems", packege: 2.7, placed: 5 },
      { no: "40", NameofIndustries: "Torrent Power (Sugen)", packege: 3.25, placed: 1 },
      { no: "41", NameofIndustries: "L&T Technology Services ", packege: 2.75, placed: 8 },
      { no: "42", NameofIndustries: "Viviana Power Tech. ", packege: 1.8, placed: 4 },
      { no: "43", NameofIndustries: "Techno Electromech", packege: 5.2, placed: 5 },
      { no: "44", NameofIndustries: "Alien", packege: 3.2, placed: 6 },
      { no: "45", NameofIndustries: "Wesige", packege: 5.6, placed: 1 },
      { no: "46", NameofIndustries: "Shaguna Foods", packege: 1.2, placed: 2 },
      { no: "47", NameofIndustries: "Cognizant", packege: 6.4, placed: 6 },
      { no: "48", NameofIndustries: "Juspay", packege: 1.3, placed: 0 },
      { no: "49", NameofIndustries: "Tata chemicals", packege: 1.8, placed: 3 },
      { no: "50", NameofIndustries: "ERDA", packege: 5.4, placed: 6 },
      { no: "51", NameofIndustries: "Voltas - Tata enterprise", packege: 1.5, placed: 1 },
      { no: "52", NameofIndustries: "Zahn Tech Engineering", packege: 5.2, placed: 1 },
    ];
  }
};

function createData(name, companiesvisited, studentplaced, index) {
  return {
    name,
    companiesvisited,
    studentplaced,
    history: func(index),
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.companiesvisited}</TableCell>
        <TableCell align="right">{row.studentplaced}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography> */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell>Name of Industries</TableCell>
                    <TableCell align="right">Package (L/A)</TableCell>
                    <TableCell align="right">Total Placed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={historyRow}>
                      <TableCell component="th" scope="row">{historyRow.no}</TableCell>
                      <TableCell>{historyRow.NameofIndustries}</TableCell>
                      <TableCell align="right">{historyRow.packege}</TableCell>
                      <TableCell align="right">{historyRow.placed}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    companiesvisited: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    studentplaced: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        placed: PropTypes.number.isRequired,
        NameofIndustries: PropTypes.string.isRequired,
        no: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Placement Record For A Y 2019 - 20", 53, 213, 0),
  createData("Placement Record For A Y 2018 - 19", 62, 227, 1),
  createData("Placement Record For A Y 2017 - 18", 74, 286, 2),
  createData("Placement Record For A Y 2016 - 17", 58, 329, 3),
  createData("Placement Record For A Y 2015 - 16", 42, 314, 4),
  createData("Placement Record For A Y 2014 - 15", 38, 214, 5),
  createData("Placement Record For A Y 2013 - 14", 35, 219, 6),
];

export default function PlacementRecords() {
  return (
    <>
      <h2>Placement Record</h2>
      <hr />
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Placement Record</TableCell>
              <TableCell align="right">Companies Visited</TableCell>
              <TableCell align="right">Students Placed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
