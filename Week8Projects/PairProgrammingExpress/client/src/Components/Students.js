import { useState, useEffect } from 'react';

function Students() {

    const [students, setStudents] = useState([]);

    // is a function that takes 2 arguments, an anonymous function and an array
    useEffect(() => {
        // getting the path we want to utilize remembering that fetch returns a promise
        fetch("")
        //since it returns a promise we have to define what goes next
        .then((response) => response.json())
    }, [])

    return (
        <div>
            <h2>List of Students</h2>
        </div>
    )
}

export default Students;