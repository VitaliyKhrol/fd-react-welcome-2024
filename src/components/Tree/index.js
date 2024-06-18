
import Parent from './Parent'

const Tree = (props) => {
    return (
        <div style={{border:'2px solid black' , padding:'20px'}}>
             <p>Tree</p>
            <Parent/>
        </div>
    );
}

export default Tree;
