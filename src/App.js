import React, { useState} from 'react';
import WindowSizer from './components/WindowSizer';
import MouseTracker from './components/MouseTracker';
import Timer from './components/Timer'
import UserDashboard from './components/UserDashboard';


function App (props) {
    const [isVisible, setVisible] = useState(true);
  
    return (
        <>
        {isVisible&&<Timer/>}
        
        </>
         
        );
    }


export default App;
