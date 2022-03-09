//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Quiz from './Component/Quiz';

function App() {
  const [data, setData] = useState();
  const [currentUrl, setCurrentUrl] = useState('/api')

  useEffect(() => {
    fetch(currentUrl)
      .then((res) => {
        console.log("data line 13", data)
        return res.json()
      })
      .then((resJson) => {
        console.log("line 14 data ", resJson)
       return setData(resJson)
      });
  }, [currentUrl]);
console.log("the data ", data)
  return (
    <div className="App">
      <h1>React Website with an Express backend</h1>

      {/* <button onClick={connectToBackend}>Send Request to Backend</button> */}
      {/* Render the newly fetched data inside data */}
      {/* <p>{!data ? "Loading Love..." : ''}</p> */}
      {data && data.results.map((animeQuiz) => {
        return <Quiz lequiz={animeQuiz}/>
      })}
      {/* <p>{data}</p> */}
    </div>
  );
}

export default App;
