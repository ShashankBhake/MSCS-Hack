import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);



export function PieChart() {

  const [vlabel, setLabel] = useState([]);
    const [count, setCount] = useState([]);

  async function getdata() {
    try {
      const response = await axios.get('http://localhost:3000/reg_count');
      console.log(response.data);
  
      
      setLabel(response.data.labels);
      setCount(response.data.counts);
      console.log(vlabel)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    getdata();
  }, [])




  const data = {
    labels:['Credit', 'Agro', 'Health/Hospital', 'Federation', 'Housing', 'Tourism', 'Fisheries', 'Construction', 'Others', 'Cooperative Bank', 'Industrial/Textile', 'Marketing', 'Dairy']
    ,
    
    datasets: [
      {
        label: '# of registrations',
        data:  [7, 52, 9, 2, 5, 1, 5, 1, 3, 10, 2, 2, 1],
        
        backgroundColor: [
          'rgb(227, 243, 200)',
          'rgb(242, 199, 194)',
          'rgb(221, 221, 221)',
          'rgb(179, 207, 232)',
          'rgb(235, 223, 249)',
          'rgb(236, 236, 245)',
          'rgb(223, 210, 237)',
          'rgb(221, 221, 221)',
          'rgb(249, 241, 227)',
          'rgb(255, 218, 204)',
          'rgb(224, 206, 234)',
          'rgb(209, 246, 230)'
        ],
        borderColor: [
          'rgb(227, 243, 200)',
          'rgb(242, 199, 194)',
          'rgb(221, 221, 221)',
          'rgb(179, 207, 232)',
          'rgb(235, 223, 249)',
          'rgb(236, 236, 245)',
          'rgb(223, 210, 237)',
          'rgb(221, 221, 221)',
          'rgb(249, 241, 227)',
          'rgb(255, 218, 204)',
          'rgb(224, 206, 234)',
          'rgb(209, 246, 230)'
        ],
        borderWidth: 1,
        
      },
    ],
    
  };
  return <Pie data={data}     />
}