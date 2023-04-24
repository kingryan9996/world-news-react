import MyContext from "./MyContext";
import Navbar from "./component/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import List from "./page/Country";
import Home from "./page/Home";
import "./App.scss";
import Country from "./page/Country";
import { AnimatePresence } from "framer-motion";
import axios from "axios";

function App() {
  const location = useLocation();

  //==================================================================================/
  //==================================================================================/
  // let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GP8s84Hs3ZKuZA7tcjg9hT7WfEVlzL8Y'

  // axios.get(
  //   'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GP8s84Hs3ZKuZA7tcjg9hT7WfEVlzL8Y'
  // ).then(res => console.log('뉴욕타임즈', res.data.response.docs

  // ))
  //==================================================================================/
  //==================================================================================/

  // var options = {
  //   method: 'GET',
  //   url: 'https://api.newscatcherapi.com/v2/search',
  //   params: { q: 'Bitcoin', lang: 'en', page: '1' },
  //   headers: {
  //     'x-api-key': 'LfeIxjEnn6OGgdwPJU4fEbiBkeb3lSu-Ud1QXBQOtSo'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log('되나?', response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  //==================================================================================/
  //==================================================================================/
  //==================================================================================/
  //==================================================================================/

  return (
    <div className="App">
      <MyContext>
        <AnimatePresence>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/country/:id" element={<Country />} />
          </Routes>
        </AnimatePresence>
      </MyContext>
    </div>
  );
}

export default App;
