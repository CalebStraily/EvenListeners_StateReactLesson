import React, { useState } from "react";

function ConditionalRendering()
{
    const [isShown, setIsShown] = useState(false)
    const [messages, setMessages] = useState(['a', 'b'])

    // && = AND used in conditional situations

    function toggleShown()
    {
        setIsShown(prevIsShown => !prevIsShown);
    }

    return(
        <div className="row">
            <div className="col-12">
                <h1>Conditional Rendering</h1>
            </div>
            <div className="col-12">
                {isShown && <p>Hello I'm Rendering!</p>}
                <button onClick={toggleShown}>{isShown ? "Hide": "Show"}</button>
            </div>
            <div className="col-12">
                {messages.length > 0 ? <h3>You have {messages.length} unread {messages.length > 1 ? 'messages' : 'message'}</h3> :
                <h3>You're all caught up!</h3>}
            </div>
        </div>
    )
}

export default ConditionalRendering;