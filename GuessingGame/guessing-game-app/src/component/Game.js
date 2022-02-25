import Form from "./form";


const Game = () => {
    
    
    
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
            <Form max={10}/>
            
            
            </div>
        </div>    
    );
}
   
   export default Game;

