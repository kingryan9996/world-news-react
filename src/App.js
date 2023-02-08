import MyContext from './MyContext';
import Navbar from './component/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom'
import List from './page/Country'
import Home from './page/Home';
import './App.css';
import Country from './page/Country';
import { AnimatePresence } from "framer-motion";
import axios from 'axios';
import Clock from 'react-live-clock';

function App() {

  const location = useLocation();

  //==================================================================================/
  //==================================================================================/
  //==================================================================================/
  //==================================================================================/

  var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: { q: 'Bitcoin', lang: 'en', page: '1' },
    headers: {
      'x-api-key': 'LfeIxjEnn6OGgdwPJU4fEbiBkeb3lSu-Ud1QXBQOtSo'
    }
  };

  axios.request(options).then(function (response) {
    console.log('되나?', response.data);
  }).catch(function (error) {
    console.error(error);
  });

  //==================================================================================/
  //==================================================================================/
  //==================================================================================/
  //==================================================================================/

  return (
    <div className='App'>
      <MyContext>
        <AnimatePresence>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/country/:id' element={<Country />} />
          </Routes>
        </AnimatePresence>
      </MyContext>
    </div>
  );
}

export default App;
