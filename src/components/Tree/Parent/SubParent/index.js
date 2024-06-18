
import Child from './Child'

const SubParent = (props) => {
    return (
        <div style={{border:'2px solid black', padding:'20px'}}>
             <p>SubParent </p>
            <Child/>
        </div>
    );
}

export default SubParent;
