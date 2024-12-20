import React from 'react'
import "./style.css"
import EventListeners from './components/EventListeners';
import MappingUpdate from './components/MappingUpdate';
import State from './components/State';
import CounterPractice from './components/CounterPractice';
import TernaryPractice from './components/TernaryPractice';
import StateTernary from './components/StateTernary';
import ComplexState from './components/ComplexState';
import ConditionalRendering from './components/ConditionalRendering';
import Forms from './components/Forms';

function App() 
{
    return(
        <div className="container-fluid">
            {/* <EventListeners /> */}
            <MappingUpdate />
            {/* <State /> */}
            {/* <CounterPractice /> */}
            {/* <TernaryPractice /> */}
            {/* <StateTernary /> */}
            {/* <ComplexState /> */}
            {/* <ConditionalRendering /> */}
            <Forms />
        </div>
    )
}

export default App;