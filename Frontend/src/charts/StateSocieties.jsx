import React, { useState } from 'react';
import dataSet from '../data/state_societies.json';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Number of Sectors in Each Given State',
    },
    tooltip: {
      enabled: true,
      // Add some spacing between the labels and the bars
      labelSpacing: 10,
    },
  },
};

function StateSocieties() {
  const data = {
    labels: dataSet.state,
    datasets: [
      {
        label: ['Y-Axis: Number of Sectors   |   X-Axis: States'],
        data: dataSet.count,
        backgroundColor: '#00abad',
      },
    ],
  };

  const containerStyle = {
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <Bar options={options} data={data} />
    </div>
  );
}

export default StateSocieties;
