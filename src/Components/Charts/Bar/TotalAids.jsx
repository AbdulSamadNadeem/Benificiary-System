import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TotalAids = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], 
        datasets: [
          {
            label: "Savings in $",
            data: [500, 700, 1200, 1500, 1800, 2500], 
            backgroundColor: "rgba(0, 123, 255, 0.5)", 
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true, 
          },
        },
      };
  return (
    <div className='w-96 h-[340px] mt-10 border border-gray-300 flex flex-col items-center ml-4'>
        <h1 className='text-3xl font-light '>Total Aids Last Year</h1>
        <Bar data={data} options={options}/>

    </div>
  )
}

export default TotalAids