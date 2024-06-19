import React from 'react';
import styles from './Header.module.css';
import UserMenu from './UserMenu';



const Header = (props) => {
    
                return (
                    < div className={styles.header}>
                        <div >
                            <img src='/logo192.png' alt='text' className={styles.logo} />
                        </div>
                        <UserMenu />
                    </div>
                )
            
}


export default Header;


