import React, {useState} from "react";

function ComplexState()
{
    return(
        <div className="row">
            <div className="col-12">
                <h1>Complex State</h1>
                <ComplexArray />
                <ComplexObjects />
            </div>
        </div>
    )
}

function ComplexArray()
{
    
    const [thingsArray, setThingsArray] = useState(['Thing 1', 'Thing 2']);



    const thingsElements = thingsArray.map(
        (thing) => <p>{thing}</p>
    )

    function addItem()
    {
        const newThingText = `Thing ${thingsArray.length + 1}`

        //Don't do this
        //thingsArray.push("Thing 3")
        
        //Use setNAME instead

        setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
    }

    return(
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <h2>Complex Array</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button onClick={addItem}>Add Item</button>
                    {thingsArray}
                </div>
            </div>
            <div className="row">
                <div className="col-12">

                </div>
            </div>
        </div>
    )
}

function ComplexObjects()
{
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (555) 555-5555",
        email: "jDoe42@yahoo.com",
        isFavorite: true
    })

    function toggleFavorite()
    {
        setContact(prevContact => 
        {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })

        console.log(contact);
    }

    return(
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <h1>Complex Objects!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    <ComplexObjectFavorite handleClick={toggleFavorite} colored={contact.isFavorite} />
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                </div>
            </div>
        </div>
    )

    function ComplexObjectFavorite(props)
    {
        console.log(props)

        let favorite = props.colored ? "favoriteTrue" : "favoriteFalse";

        return(
            <div>
                <div onClick={props.handleClick} className={`text-center ${favorite}`}>X</div>
            </div>
        )
    }
}

export default ComplexState;