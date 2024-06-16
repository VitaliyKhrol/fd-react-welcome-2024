
import Counter from '../../components/Counter'
import React, { Component } from 'react';

class CounterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 1,
        }
    }

changeHandler=({target:{value,name}})=>{
    this.setState({
        [name]: Number(value),
})
}

    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <input
                    type='range'
                    min='1'
                    max='100'
                    name='inputValue'
                    value={inputValue}
                    onChange={this.changeHandler}

                />
                <p>{inputValue}</p>
                <Counter step={inputValue} />
            </div>
        );
    }
}


export default CounterPage;
