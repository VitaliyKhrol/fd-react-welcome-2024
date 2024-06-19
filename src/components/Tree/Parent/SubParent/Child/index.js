
import InerChild from './InnerChild'

const Child = (props) => {
    return (
        <div style={{ border: 'inherit', padding:'20px'}}>
            <p>Child</p>
            <InerChild/>
        </div>
    );
}

export default Child;
