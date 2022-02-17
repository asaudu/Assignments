const Game = () => {
    let secretNumber;

    function startTheGame(event, max) {
        event.preventDefault()
         secretNumber = Math.floor(Math.random() * max + 1)
    }    
    
    function submitButton(event) {
        event.preventDefault();
        console.log(event.target);
    }
    
    return (
    
        <div>
        <div id="instructionsSection">
        <h1 id="numberGameTitle">Number Guessing Game</h1>
        <h2>Here's how it works:</h2>
        <ol>
        <li>You click the button below to generate the secret number (you can choose 1 - 10, 1 - 20, or 1 - 40)</li>
        <li>Then you enter your guess in the input field</li>
        <li>If you're right, you win!</li>
        <li>If not, you will get a hint and 2 more chances to guess the right number.</li>
        </ol>
        </div>
        <div id="gameSection">
        <form id="gameForm" onSubmit= {(event) => submitButton(event)}>
        <label>Get Your Guessing-hat On 1 - 10</label>
        <input type="submit" id="startButton" value="Start the Game" onClick={(event) => startTheGame(event, 10)} /> 
        <label>Your guess goes here</label>
        <input type="text" id="theGuess" placeholder="Your guess here"/> <input type="submit" id="submitButton" value="Submit" />
        </form>
        <p id="totalGuesses"></p>
        
        <form id="gameForm2">
        <label>Get Your Guessing-hat On 1 - 20</label>
        <input type="submit" id="startButton2" value="Start the Game" /> 
        <label>Your guess goes here</label>
        <input type="text" id="theGuess2" placeholder="Your guess here"/> <input type="submit" id="submitButton2" value="Submit"/>
        </form>
        <p id="totalGuesses2"></p>
        
        <form id="gameForm3">
        <label>Get Your Guessing-hat On 1 - 40</label>
        <input type="submit" id="startButton3" value="Start the Game" /> 
        <label>Your guess goes here</label>
        <input type="text" id="theGuess3" placeholder="Your guess here"/> <input type="submit" id="submitButton3" value="Submit"/>
        </form>
        <p id="totalGuesses3"></p>
        </div>
        
        </div>
    );
} 
   
   export default Game;

