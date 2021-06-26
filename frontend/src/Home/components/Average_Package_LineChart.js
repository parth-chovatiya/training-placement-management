import React from 'react'
import { Line } from "react-chartjs-2";


const Average_Package_LineChart = () => {

  const dataLine = {
    labels: [
      "2013-14",
      "2014-15", 
      "2015-16",
      "2016-17", 
      "2017-18",
      "2018-19",
      "2019-20",
    ],
    datasets: [
      {
        label: "Average Package",
        data: [2.61, 2.87, 3.03, 3.65, 3.46, 3.7, 4.48],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  const optionsBar = {
    plugins: {
      title: {
        display: true,
        text: 'Average Placement',
        // fontSize: "50px"
      },
    },
  };
  return (
    <div>
      <Line
        data={dataLine}
        // width="200px"
        // height="50px"
        options={optionsBar}
      />
    </div>
  )
}

export default Average_Package_LineChart
