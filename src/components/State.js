import React, {useState} from "react";

function State()
{

    const [result, setResult] = useState('No');
    const [food, setFood] = useState('Pizza');
    const [sports, setSports] = useState('Football');

    function changeAnswer()
    {
        setResult('Stop clicking me!');
    }

    return(
        <div className="row">
            <div className="col-12">
                <h3 onClick={changeAnswer}>Is State important?</h3>
            </div>
            <div className="col-12">
                <h4>{result}</h4>
            </div>
        </div>
    )
}

export default State;