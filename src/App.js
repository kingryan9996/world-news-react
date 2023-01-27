import MyContext from './MyContext';
import Navbar from './component/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom'
import List from './page/Country'
import MapChart from './component/MapChart';
import './App.css';
import Country from './page/Country';
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  console.log(location, 'loca')

  return (
    <div className='App'>
      <MyContext>
        <AnimatePresence>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<MapChart />} />
            <Route path='/country/:id' element={<Country />} />
          </Routes>
        </AnimatePresence>
      </MyContext>
    </div>
  );
}

export default App;
