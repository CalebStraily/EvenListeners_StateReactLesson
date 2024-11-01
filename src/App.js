import React from 'react'
import "./style.css"
import EventListeners from './components/EventListeners';
import MappingUpdate from './components/MappingUpdate';

function App() 
{
    return(
        <div className="container-fluid">
            <MappingUpdate />
        </div>
    )
}

export default App;