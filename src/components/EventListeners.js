import React from "react";

function EventListeners()
{
    function handleClick()
    {
        console.log("I'm Clicked!");
    }

    function imgHover()
    {
        console.log("You have hovered the img!");
    }

    return(
        <div className="row">
            <div className="col-12">
                <h1>Event Listener Section!</h1>
            </div>
            <div className="col-12">
                <img onMouseEnter={imgHover} src="https://picsum.photos/640/360" alt="" />
            </div>
            <div className="col-12">
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    )
}

export default EventListeners;