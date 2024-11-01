import React from 'react'
import "./style.css"
import EventListeners from './components/EventListeners';
import MappingUpdate from './components/MappingUpdate';
import State from './components/State';
import CounterPractice from './components/CounterPractice';
import TernaryPractice from './components/TernaryPractice';

function App() 
{
    return(
        <div className="container-fluid">
            {/* <EventListeners /> */}
            {/* <MappingUpdate /> */}
            {/* <State /> */}
            {/* <CounterPractice /> */}
            <TernaryPractice />
        </div>
    )
}

export default App;