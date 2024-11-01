import React, {useState} from "react";

function CounterPractice()
{
    const [count, setCount] = useState(0);

    // 1st way to pass new values to useState
    /*
    function add()
    {
        return(
            setCount(function(prevCount) {
                return prevCount + 1
            })
        )
    }
    */

    // 2nd way to pass new values to useState
    // when setting new parameters always add "prev"

    function add()
    {
        setCount(prevCount => prevCount + 1);
    }

    function subtract()
    {
        setCount(prevCount => prevCount - 1);
    }
    
    return(
        <div className="row">
            <div className="col-12">
                <h1>Counter Practice</h1>
            </div>
            <div className="col-12">
                <input onClick={add} type="button" value="Add Number" />
                <input onClick={subtract} type="button" value="Subtract Number" />
            </div>
            <NumCounter num={count}/>
        </div>
    )
}

function NumCounter(props)
{
    return(
        <div className="col-12">
            <h3>Current Number: {props.num}</h3>
        </div>
    )
}

export default CounterPractice;