import React from 'react'
import { Pie } from "react-chartjs-2";

const data = {
  labels: ['TCS Ninja ', 'Crest Datasystems', 'eInfochips ', 'L&T Technology Services', 'Tatvasoft'],
  datasets: [
    {
      label: '# of Votes',
      data: [35, 28, 9, 8, 7],
      backgroundColor: [
        'rgba(41, 203, 169, 0.8)',
        'rgba(57, 80, 103, 0.8)',
        'rgba(207, 217, 218, 0.8)',
        'rgba(57, 168, 240, 0.8)',
        'rgba(170, 97, 200, 0.8)',
      ],
      borderColor: [
        'rgba(41, 203, 169, 1)',
        'rgba(57, 80, 103, 1)',
        'rgba(207, 217, 218, 1)',
        'rgba(57, 168, 240, 1)',
        'rgba(170, 97, 200, 1)',
      ],
      borderWidth: 1,
      hoverOffset: 20
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
      font: {weight: 'bold', size:"20px"}
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
