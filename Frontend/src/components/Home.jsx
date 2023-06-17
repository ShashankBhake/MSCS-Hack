
import Navbar from './Navbar'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useEffect } from 'react';

import axios from 'axios'
import { useState } from 'react';



const Home = () => {

  function createData(
    name,
    no_of_societies,
  ) {
    return { name, no_of_societies };
  }
  
  const rows = [
    createData('ANDHRA PRADESH	', 159),
    createData('ARUNACHAL PRADESH', 237),
    createData('ASSAM', 262),
    createData('BIHAR', 305),
    createData('CHANDIGARH', 356),
  ];
  
  const [value, setValue] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:4000/totalData`);
    setValue(data);
    console.log(data.data)
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {/* <Typography variant='h2' >State Wise List</Typography>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  >Name of Societies</TableCell>
            <TableCell align="right">Number of Societies</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        
          {
            value.data.map((item, index)=>{
              <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
              >
                <TableBody>
                  {item.name_of_society}
                </TableBody>
              </TableRow>
            })
          }
          
        </TableBody>
      </Table>
    </TableContainer> */}
        
      <div>
        {
          value.map((item)=>{
            <p>{item.name_of_society}</p>
          })
        }
      </div>

    </>
  )
}

export default Home