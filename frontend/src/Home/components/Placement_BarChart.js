import React from 'react'
import { Bar } from "react-chartjs-2";


const Placement_BarChart = () => {

  const dataBar = {
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
        label: "# of Student",
        data: [219, 214, 314, 329, 286, 227, 213],
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
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    
    plugins: {
      title: {
        display: true,
        text: 'Placement BarChart',
        // fontSize: "50px"
      },
    },
    legend: {
      display: true,
      position: 'right'
    }
  };

  return (
    <div>
      <Bar
        data={dataBar}
        // width="200px"
        // height="50px"
        options={ optionsBar }
      />
    </div>
  )
}

export default Placement_BarChart
