import { Pie } from 'react-chartjs-2';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  //  setup

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to take up full container size
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
