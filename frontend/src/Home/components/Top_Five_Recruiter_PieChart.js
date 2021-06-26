import React from 'react'
import { Pie } from "react-chartjs-2";

const data = {
  labels: ['TCS Ninja ', 'Crest Datasystems', 'eInfochips ', 'L&T Technology Services', 'Tatvasoft'],
  datasets: [
    {
      label: '# of Votes',
      data: [35, 28, 9, 8, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    title: {
      display: true,
      text: 'Top Recruitment Company',
      // fontSize: "50px"
    },
  },
};
const Top_Five_Recruiter_PieChart = () => {
  return (
    <div>
      <Pie data={data} options={options}/>
    </div>
  )
}

export default Top_Five_Recruiter_PieChart
