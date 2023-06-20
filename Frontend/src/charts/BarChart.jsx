import React from 'react';
import axios from 'axios';


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
import { useEffect } from 'react';


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
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [ 40,70,10,50, 60, 20, 30,],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function BarChart() {

    

    useEffect(()=>{

        async function getdata(){
            try{const response = await axios.get('localhost:3000/sector_type')
            console.log(response)}catch(e){
                console.log(e)
            }
        }
        getdata();
    }, [])

  return <div
    style={{
        width: "70vw"
    }}
  >
<Bar options={options} data={data} />
  </div>
}

export default BarChart;
