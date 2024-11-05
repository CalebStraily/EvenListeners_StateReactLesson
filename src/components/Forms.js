import React, {useState} from "react";

function Forms()
{

    const [formDataAll, setFormDataAll] = useState([])

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments:"",
        isFriendly: false,
        employment: "",
        favColor: ""
    })

    function handleEvent(event)
    {
        /*
        if (event.target.name === 'firstName')
        {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    firstName: event.target.value
                }
            })
        }
        else (event.target.name === "lastName")
        {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    lastName: event.target.value
                }
            })
        }
        */

        const {name, value, type, checked} = event.target 
        console.log(name)
        console.log(value)

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                //ES6 Computed properties
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        setFormDataAll(prevFormDataAll => [...prevFormDataAll, formData])

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            comments:"",
            isFriendly: false,
            employment: "",
            favColor: ""
        })

        
    }

    console.log(formDataAll);

    return(
        <div className="row">
            <div className="col-12">
                <h1>Forms</h1>
            </div>
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name" name="firstName" onChange={handleEvent} value={formData.firstName} />
                    <input type="text" placeholder="Last Name" name="lastName" onChange={handleEvent} value={formData.lastName} />
                    <input type="text" placeholder="Email Address" name="email" onChange={handleEvent} value={formData.email} />
                    <textarea placeholder="Comments" name="comments" onChange={handleEvent} value={formData.comments} cols="30" rows="10" />
                    <input type="checkbox" name="isFriendly" id="isFriendly" value={formData.isFriendly} checked={formData.isFriendly} onChange={handleEvent} />
                    <label htmlFor="isFriendly">Are you friendly?</label>

                    <fieldset>
                        <legend>What is your current employment?</legend>

                        <input type="radio" name="employment" id="unemployed" value='unemployed' onChange={handleEvent} checked={formData.employment === "unemployed"} />
                        <label htmlFor="unemployed">Unemployed</label>
                        <br />
                        <input type="radio" name="employment" id="full-time" value='full-time' onChange={handleEvent} checked={formData.employment === "full-time"} />
                        <label htmlFor="full-time">Full Time</label>
                        <br />
                        <input type="radio" name="employment" id="part-time" value='part-time' onChange={handleEvent} checked={formData.employment === "part-time"} />
                        <label htmlFor="part-time">Part Time</label>
                    </fieldset>
                    <br />
                    <label htmlFor="favColor">What is your favorite color?</label>
                    <br />
                    <select name="favColor" id="favColor" value={formData.favColor} onChange={handleEvent}>
                        <option value="">Choose Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>

                    <button>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Forms;