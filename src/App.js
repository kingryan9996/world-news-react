import MyContext from './MyContext';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom'
import List from './page/Country'
import MapChart from './component/MapChart';
import './App.css';
import Country from './page/Country';


function App() {

  return (
    <>
      <MyContext>
        <Navbar />
        <Routes>
          <Route path='/' element={<MapChart />} />
          <Route path='/country/:id' element={<Country />} />
        </Routes>
      </MyContext>
    </>
  );
}

export default App;
