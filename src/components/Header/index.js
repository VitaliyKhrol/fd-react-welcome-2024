import React from 'react';
import styles from './Header.module.css';
import UserMenu from './UserMenu';
import ThemeContext from '../../contexts/ThemeContext';
import CONSTANTS from '../../constants';

const {THEMES} = CONSTANTS;



const Header = (props) => {

    return (
        <ThemeContext.Consumer>
            {([theme, setTheme]) => {
                
                const changeTheme = () => {
                    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                    setTheme(newTheme)

                }

                return (
                    < div className={styles.header}>
                        <div >
                            <img src='/logo192.png' alt='text' className={styles.logo} />
                        </div>
                        <button onClick={changeTheme}>Togle Theme</button>
                        <UserMenu />
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    )

}


export default Header;


