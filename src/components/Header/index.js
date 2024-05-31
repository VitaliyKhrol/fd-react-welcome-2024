import React from 'react';
import styles from './Header.module.css'



const Header = (props) => {
    return (
        <div className={styles.header}>
            <img src='/logo192.png' alt='text' className={styles.logo} />
            {props.children}
        </div>
    );
}


export default Header;


