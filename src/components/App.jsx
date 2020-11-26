import React, {useState} from "react";
import Calendar from "./Calendar.jsx";
import Quote from "./Quote.jsx";
import Schedule from "./Schedule";
import '../App.css';
import "../index.css";
import ls from 'local-storage';

const options = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'};
const today = new Date().toLocaleDateString("en-us", options);



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>{today}</h1>
      <Quote />
      <Calendar />
      <Schedule />
      </header>
    </div>
  );
}

export default App;
