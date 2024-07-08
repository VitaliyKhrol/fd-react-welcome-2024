import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import Parent from './Parent';
import styles from './Tree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import UserContext from '../../contexts/UserContext';
import ThemeContext from '../../contexts/ThemeContext';



const { THEMES } = CONSTANTS;


function Tree(props) {
    const [user, setUser] = useContext(UserContext);
    const [theme, setTheme] = useContext(ThemeContext);
    const cn = cx(styles.container,
        {
            [styles.darkTheme]: theme === THEMES.DARK,
            [styles.lightTheme]: theme === THEMES.LIGHT,

        })


    const changeTheme = useCallback(() => {
        setTheme(theme => theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
    },[])

    function computedValue (){
        let sum =0;
        for (let i=0; i<100000000; i++){
            sum = i**15;
        }
        return sum;
    };

    const layouValue = useMemo(computedValue,[]);

    const memoizedFunc = useCallback(() => {
        console.log(props.value)
    }, [props.value]);

    useEffect(() => {
        console.log('функция пересоздалась')

    }, [memoizedFunc])

    return (
        <div className={cn}>
            <p>{user.firstName}</p>
            <p>Tree</p>
            <button onClick={changeTheme}>THEME</button>
            {memoizedFunc()}
            <input type = 'text' value={layouValue}/>
            <Parent />
        </div>


    );

}


export default Tree;

