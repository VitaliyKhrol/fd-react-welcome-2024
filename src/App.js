import React, { useState} from 'react';
import WindowSizer from './components/WindowSizer';


function App (props) {
    const [isVisible, setVisible] = useState(true);
  
    return (
        <>
        {isVisible&&<WindowSizer/>}
        
        </>
         
        );
    }


export default App;
