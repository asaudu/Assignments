//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Quiz from './Component/Quiz';

function App() {
  const [data, setData] = useState({});
  const [currentUrl, setCurrentUrl] = useState('/api')

  useEffect(() => {
    fetch(currentUrl)
      .then((res) => res.json())
      .then((res) => setData(data));
  }, [currentUrl]);
console.log(data.results + " hello")
  return (
    <div className="App">
      <h1>React Website with an Express backend</h1>

      {/* <button onClick={connectToBackend}>Send Request to Backend</button> */}
      {/* Render the newly fetched data inside data */}
      {/* <p>{!data ? "Loading Love..." : ''}</p>
      {data && data.results[0].map((animeQuiz) => {
        return <Quiz lequiz={animeQuiz}/>
      })} */}
      {/* <p>{data}</p> */}
    </div>
  );
}

export default App;
