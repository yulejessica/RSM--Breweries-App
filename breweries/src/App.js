import './App.css';
import React from 'react';
import { useState, createContext} from "react";
import Header from './components/header/Header.jsx';
import BreweryListContainer from './components/brewery/BreweryListContainer.jsx';


export const PropIdContext = createContext();
function App() {
  //setup default city
  const [city, setCity] = useState('Los Angeles');
  //setup default state
  const [state, setState] = useState('California');
  return (
    <>
    <PropIdContext.Provider value={{state, setState, city, setCity}} >
      <Header />

        <BreweryListContainer />

    </PropIdContext.Provider>

  </>
  );
}

export default App;
