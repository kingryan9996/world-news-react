import MyContext from './MyContext';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom'
import List from './page/List'
import MapChart from './component/MapChart';
import './App.css';


function App() {

  return (
    <>
      <MapChart />
      <MyContext>
        <Navbar />
        <Routes>
          <Route path='' element={<List />} />
        </Routes>
      </MyContext>
    </>
  );
}

export default App;
