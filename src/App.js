import React, { useState } from 'react';
import Tree from './components/Tree';
import UserContext from './contexts/UserContext';
import ThemeContext from './contexts/ThemeContext';
import CONSTANTS from './constants';

const {THEMES} = CONSTANTS;


function App(props) {
    const [user, setUser] = useState({
        firstName: 'John Doe'
    });
    const [theme, setTheme] = useState(THEMES.LIGHT);
    


    return (
        <ThemeContext.Provider value ={[theme,setTheme]}>
            <UserContext.Provider value={[user, setUser]}>
                <Tree />
            </UserContext.Provider>
        </ThemeContext.Provider>


    );
}


export default App;
