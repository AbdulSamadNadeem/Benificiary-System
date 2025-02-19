import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const MoneyLine = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], 
        datasets: [
          {
            label: "Savings in $",
            data: [500, 700, 1200, 1500, 1800, 2500], 
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.2)",
            tension: 0.4, 
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
      };
  return (
    <div className='w-96 h-[340px] mt-10 border border-gray-300 flex flex-col items-center ml-4'>
        <h1 className='text-3xl font-light '>Total Revenue in Last Year</h1>
        <Line  data={data} options={options} />;
    </div>
  )
}

export default MoneyLine