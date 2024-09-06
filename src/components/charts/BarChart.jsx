import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // setup - Data and Labels

  const labels = [
    'Jan',
    'Feb',
    'March',
    // 'April',
    // 'May',
    // 'June',
    // 'July',
    // 'Aug',
    // 'Sept',
    // 'Oct',
    // 'Nov',
    // 'Dec',
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 300,
        maxBarThickness: 30,
        minBarLength: 60,

        data: [40, 20, 15],
        backgroundColor: [
          'rgba(224, 10, 120, 0.8)',
          'rgba(5, 80, 154, 0.8)',
          'rgba(218, 8, 26, 0.93)',
          'rgba(110, 8, 26, 0.93)',
          'rgba(62, 59, 60, 0.99)',
          'rgba(2, 88, 65, 0.99)',
          'rgba(2, 242, 255, 0.99)',
          'rgba(209, 242, 47, 0.58)',
          'rgba(25, 0, 182, 0.97)',
          'rgba(53, 8, 1, 0.97)',
          'rgba(53, 49, 79, 0.97)',
          'rgba(143, 133, 131, 0.97)',
        ],
      },
    ],
  };

  //   configuration - options

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={config.options} />
    </div>
  );
};

export default BarChart;
