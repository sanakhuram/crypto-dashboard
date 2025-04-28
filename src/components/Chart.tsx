'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

type ChartProps = {
  data: number[][];
};

export default function Chart({ data }: ChartProps) {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="font-bold mb-2">Price Chart</h2>
      <Line
        data={{
          labels: data.map(([timestamp]) => new Date(timestamp).toLocaleDateString()),
          datasets: [
            {
              label: 'Price USD',
              data: data.map(([, price]) => price),
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.4,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
            },
          },
        }}
      />
    </div>
  );
}
