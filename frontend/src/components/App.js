import { Routes, Route } from 'react-router-dom';



import BarChat from '../charts/BarChart'

const App = () => {
  return (
    <>
      <Routes>
      
          
          <Route path="/chart" element={< BarChat/>}  />      
        
      </Routes>
    </>
  );
};

export default App;
