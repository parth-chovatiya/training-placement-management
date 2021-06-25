import React from "react";
import { Bar } from "react-chartjs-2";


const Branchwise_placement_BarChart = () => {
  const dataBar = {
    labels: [
      "CE", // Civil
      "CP", // Computer
      "EE", // Electrical
      "EL", // Electronics
      "EC", // Electronics And Communication
      "ME", // Mechanical
      "PE", // Production
      "IT", // Information Technology
    ],
    datasets: [
      {
        label: "# of Student",
        data: [14, 55, 12, 27, 19, 28, 10, 42],
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
  const optionsBar = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
     title:{
        display:true,
        text:'Largest Cities In India',
        fontSize:25
      },
      legend:{
        display:true,
        position:'right'
      }
  };

  return (
    <div className="chart">
      <Bar
        data={dataBar}
        width="200px"
        height="50px"
        options={{ optionsBar }}
      />
    </div>
  );
};

export default Branchwise_placement_BarChart;
