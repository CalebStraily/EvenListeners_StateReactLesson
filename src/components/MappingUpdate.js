import React from "react";

function MappingUpdate()
{
    // const thingsArray = ['Thing 1', 'Thing 2'];

    const [things, setThings] = React.useState(['Thing 1', 'Thing 2']);

    /*
    const thingsElement = thingsArray.map(
        (thing) =>
        {
            return <p>{thing}</p>
        }
    )
    */

    function addItem()
    {
        const newThingText = `Thing ${things.length + 1}`
        // "..." is the spread operator
        setThings(prevState => [...prevState, newThingText])
    }

    const thingsElement = things.map(
        (thing) => 
        {
            return <p>{thing}</p>
        }
    )

    /*
    function addItem()
    {
        const newThingText = `Thing ${thingsArray.length + 1}`;

        thingsArray.push(newThingText);
        console.log(thingsArray);
    }
    */

    return(
        <div className="row">
            <div className="col-12">
                <button onClick={addItem}>Add Item</button>
                {thingsElement}
            </div>
        </div>
    )
}

export default MappingUpdate;