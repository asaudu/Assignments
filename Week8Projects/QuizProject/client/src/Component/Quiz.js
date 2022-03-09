const Quiz = ({lequiz}, props) => {

    return(
        <div>
            Quiz page here
            <h2>{lequiz.results}</h2>
            <p>{props.number}</p>
            {/* below made everything disappear again and prevented loading plus caused more erros of an uncaught error. did not resolve unique key warning */}
            {/* <p>{props.result[0].question}</p> */}
            {/* <button>{answer and next question}</button> */}
        </div>
    )
};

export default Quiz;