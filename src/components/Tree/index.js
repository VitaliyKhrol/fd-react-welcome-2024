
import Parent from './Parent'
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Tree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';


const { THEMES } = CONSTANTS;

const Tree = (props) => {

    return (
        <ThemeContext.Consumer>
            {([theme,setTheme]) => {
                const cn = cx(styles.container,
                    {
                        [styles.darkTheme]: theme === THEMES.DARK,
                        [styles.lightTheme]: theme === THEMES.LIGHT,

                    })
                return (
                    <div className={cn}>
                        <p>Tree</p>
                        <Parent />
                    </div>
                );

            }}

        </ThemeContext.Consumer>
    )
}

export default Tree;
