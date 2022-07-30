import './App.css';
import React from 'react';
import { useState, createContext} from "react";
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import BreweryListContainer from './components/BreweryListContainer.jsx';


export const PropIdContext = createContext();
function App() {
  //setup default city
  const [city, setCity] = useState('Los Angeles');
  //setup default state
  const [state, setState] = useState('California');
  return (
    <>
    <PropIdContext.Provider value={{state, setState, city, setCity}} >
      {/* <BrowserRouter>
        <Routes>
          <Route path="/breweries" component={BreweryListContainer} />
        </Routes>
      </BrowserRouter> */}
      <BreweryListContainer />
      </PropIdContext.Provider>

  </>
  );
}

export default App;
