import React from 'react'
import { Line } from "react-chartjs-2";


const Highest_Packege_LineChart = () => {

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
        label: "Highest Package",
        data: [5.9, 7.8, 10, 6, 9, 11, 8],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
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

  return (
    <div>
       <Line
        data={dataLine}
        width="6000"
        height="900"
      />
    </div>
  )
}

export default Highest_Packege_LineChart
