import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Add";
import SnackOrBoozeApi from "./Api";
import "./App.css";
import Snack from "./FoodItem";
import Menu from "./FoodMenu";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks}/>} />
            <Route path="/snacks" element={<Menu snacks={snacks} title="Snacks" />} />    
            <Route path="/snacks/:id" element={<Snack items={snacks} cantFind="/snacks" />} />      
            <Route path="/drinks" element={<Menu drinks={drinks} title="Snacks" />} />    
            <Route path="/drinks/:id" element={ <Snack items={drinks} cantFind="/drinks" />} />   
            <Route path="/add" element={<Add />} />       
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;