import './App.css';
import React from 'react';
import { useState, createContext} from "react";
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import BreweryList from './components/BreweryList.jsx'
import BrewerySearch from './components/BrewerySearch.jsx';
import BreweryListContainer from './components/BreweryListContainer.jsx';


export const PropIdContext = createContext();
function App() {
  const [city, setCity] = useState('new_york');
  return (
    <>
    <PropIdContext.Provider value={{city}} >
      <BrowserRouter>
      <Routes>
        <Route exact path="/" component={BrewerySearch} />
        <Route path="/results" component={BreweryListContainer} />
      </Routes>
      </BrowserRouter>
      </PropIdContext.Provider>
    {/* <Footer /> */}
  </>
  );
}

export default App;
