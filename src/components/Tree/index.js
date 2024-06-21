import Parent from './Parent';
import { withTheme } from '../../HOCs/withTheme';
import styles from './Tree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import { withUser } from '../../HOCs/withUser';



const { THEMES } = CONSTANTS;


function Tree(props) {
        const {user,setUser} = props
        const {theme, setTheme } = props;
        console.log(user)
        console.log(theme)
        const cn = cx(styles.container,
            {
                [styles.darkTheme]: theme === THEMES.DARK,
                [styles.lightTheme]: theme === THEMES.LIGHT,

            })

        return (
            <div className={cn}>
                <p>{user.firstName}</p>
                <p>Tree</p>
                <Parent />
            </div>


        );
    
}
 
const TreeWithUser = withUser(Tree)
const TreeWithUserWithTheme = withTheme(TreeWithUser)

export default TreeWithUserWithTheme ;

