//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Quiz from './Component/Quiz';

function App() {
  //keep useState undefined so as not to interupt processes moving forward
  const [data, setData] = useState();
  //useState for Current Question set to 0 so it starts from the beginning
  const [currQ, setCurrQ] = useState(0);
  //this useState keeps the score and is also set to 0
  const [score, setScore] = useState(0);
  //line below was implemented when I got help from a fellow participant since I mentioned my quiz renders new questions each time. Not sure this is needed though
  //const [currentUrl, setCurrentUrl] = useState('/api')

  useEffect(() => {
    fetch('/api')
      .then((res) => {
        //console.log("data line 13", data)
        return res.json()
      })
      //had to rename data to resJson so it wouldn't hop back into the useState data variable which seemed to fix the undefined error
      .then((resJson) => {
        //console.log("line 14 data ", resJson)
       return setData(resJson)
      });
  }, []);
  //checking that the data is actually being received.
console.log("the data ", data)

if (!data) return <div>loading....</div>;
const onAnswerClick = (answer) => {
  if(answer === data.results[currQ].correct_answer) {
    setScore((prevScore) => prevScore + 1);
  }
  setCurrQ((prevQ) => prevQ + 1);
};

  return (
    <div className="App">
      <h1>So you say you like anime</h1>

      {/* Render the newly fetched data inside data */}
      {/* will show Loading if there are any issues retrieving the data */}
      <p>{!data ? "Loading Love..." : ''}</p>
      {/* below would allow for me to retrieve the data and assign each question to an index and then be called that way */}
      {/* {data && data.results.map((animeQuiz, index) => {
        return <Quiz key={index} lequiz={animeQuiz} onAnswerClick={onAnswerClick}/>
      })} */}
      {/* setting up this ternary statement instead retrieves the data a question at a time per the length of the quiz by utilizing the previously set useState */}
      Quiz hereee
      {currQ >= data.results.length ? (
        <div>
          {/* this line defines the score to be shown as what you got right over the total number of questions */}
          Game Over Score: {score}/{data.results.length}
        </div>
      ) : (
        <Quiz lequiz={data.results[currQ]} onAnswerClick={onAnswerClick} />
      )}
      
    </div>
  );
}

export default App;
