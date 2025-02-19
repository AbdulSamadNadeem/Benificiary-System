import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
const Success = () => {
  const data = {
    labels: ["Saylani", "JDC", "Chippa"],
    datasets: [
      {
        label: "Help in $",
        data: [15000, 5000, 8000],
        backgroundColor: ["#8DC63F", "#0D6DB7", "#e74c3c"],
        borderColor: ["#8DC63F", "#0D6DB7", "#e74c3c"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return (
    <div className="w-52 h-52 mt-10 border border-gray-300 flex flex-col items-center ml-4 p-2">
      <h1 className="text-3xl font-light">Success</h1>
      <div className="w-48 h-48">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Success;
