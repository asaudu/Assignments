//passing in the props and function for the button
const Quiz = ({ lequiz, onAnswerClick }) => {
    const { question, incorrect_answers, correct_answer } = lequiz;

    return(
        <div>
            <h3>{question}</h3>
            <ul>
                {incorrect_answers.map((ans, index) => (
                <li onClick={() => onAnswerClick(ans)} key={index}>
                    {ans}
                </li>
                ))}
                <li onClick={() => onAnswerClick(correct_answer)}>{correct_answer}</li>
            </ul>
            
            {/* below made everything disappear again and prevented loading plus caused more erros of an uncaught error. did not resolve unique key warning */}
            {/* <p>{props.result[0].question}</p> */}
            {/* <button>{answer and next question}</button> */}
        </div>
    )
};

export default Quiz;