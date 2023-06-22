import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import BarChart from '../charts/BarChart'
import AppealForm from '../routes/AppealForm'
import Map from '../routes/Map'
import StateSocieties from '../charts/StateSocieties'
import Login from '../routes/Login'
import Dashboard from '../routes/Dashboard';
import Header from './Header';
import Register from '../routes/Register'
import ForgotPass from '../routes/ForgotPass';

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path='chart'  element={<StateSocieties/>} />
          <Route path='' element={<Dashboard/>} />
          <Route path='appealform' element={<AppealForm/>} />
          <Route path='forgotpass' element={<ForgotPass/>} />
          <Route path='register' element={<Register/>} />
          <Route path='login' element={<Login/>} />
          <Route path='map' element={<Map/>} />
          <Route path="*" element={<p>Not found!</p>} />
          

        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;
