
import React , { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  React.useEffect(() => {
    //goes to the route below to get the response
    fetch("/getWeatherPlano")
      .then((res) => res.json())
      .then((data) => setData(data));
      //empty array below to make sure it only renders on the first render of component
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
