// Chart.jsx
import React, { useEffect, useState } from 'react';
import './components.css';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#FFBB28', '#00C49F', '#FF6B6B'];

function Chart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    const statusCounts = jobs.reduce(
      (acc, job) => {
        acc[job.status] = (acc[job.status] || 0) + 1;
        return acc;
      },
      { Applied: 0, Interview: 0, Offer: 0, Rejected: 0 }
    );

    const formatted = [
      { name: 'Applied', value: statusCounts.Applied },
      { name: 'Interview', value: statusCounts.Interview },
      { name: 'Offer', value: statusCounts.Offer },
      { name: 'Rejected', value: statusCounts.Rejected },
    ];

    setChartData(formatted);
  }, []);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
