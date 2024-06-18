
import InerChild from './InnerChild'

const Child = (props) => {
    return (
        <div style={{ border: '2px solid black' , padding:'20px'}}>
            <p>Child</p>
            <InerChild/>
        </div>
    );
}

export default Child;
