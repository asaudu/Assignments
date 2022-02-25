import useState from "react";
import React from "react";

const Form = (props) => {
  let secretNumber;
  let totalGuesses = 0;
  let theGuess;
  let totalGuessesMessage;
  let range = "1 - " + props.max;

  function startTheGame(event, max) {
    event.preventDefault();
    secretNumber = Math.floor(Math.random() * max + 1);
    console.log("the secret number " + secretNumber);
  }

  //function guessEvaluator() {

  // const [data, setData] = useState(null)
  // const submission = React.createRef();
  //};

  function actualGuesses(val) {
    theGuess = val.target.value;
    console.warn(val.target.value);
  }

  function submitButton(event) {
    event.preventDefault();
    console.log(theGuess, secretNumber);
    if (secretNumber < theGuess) {
      totalGuessesMessage =
        "Your number is too high";
      totalGuesses++;
    } else if (secretNumber > theGuess) {
      totalGuessesMessage =
        "Your number is too low";
      totalGuesses++;
    } else {
      totalGuessesMessage =
        "You wooon!! And you got it done in " + totalGuesses + " guesses!";
    }
  }

  return (
    <>
      <form id="gameForm" onSubmit={(event) => submitButton(event)}>
        <label>Get Your Guessing-hat On {range}</label>
        <input
          type="submit"
          id="startButton"
          value="Start the Game"
          onClick={(event) => startTheGame(event, props.max)}
        />
        <label>Your guess goes here</label>
        <input
          type="text"
          id="theGuess"
          placeholder="Your guess here"
          onChange={actualGuesses}
        />
        <input
          type="submit"
          id="submitButton"
          value="Submit"
          onClick={(event) => submitButton(event)}
        />
      </form>
      <p id="totalGuesses">{totalGuessesMessage}</p>
    </>
  );
};

export default Form;
