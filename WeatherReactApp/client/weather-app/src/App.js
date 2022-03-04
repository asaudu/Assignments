import DayForecast from './components/DayForecast';
import React , { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null);


  useEffect(() => {
    console.log(useEffect );
    //goes to the route below to get the response
    fetch("/getWeatherPlano")
      .then((res) => res.json())
      .then((data) => setData(data));
      //empty array below to make sure it only renders on the first render of component
  }, []);

console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>{!data ? "Loading..." : ''}</p>
        {data && data.list.map((dayForecast) => {
         return <DayForecast forecast={dayForecast}/> 
        })}
      </header>
    </div>
  );
}

export default App;
