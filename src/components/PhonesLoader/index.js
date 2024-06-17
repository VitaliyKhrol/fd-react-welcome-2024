import React, { Component } from 'react';

class PhonesLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFething: true,
            error: null

        }
    }

    componentDidMount(){
        this.props.loadData()
        .then (data =>{
            this.setState ({
                data: data})
        }).catch(error =>{
            this.setState({
                error: error
            })
        }).finally(() =>{
            this.setState({
                isFething: false
            })
        })
    }

    render() {
        const { data, isFething, error } = this.state;
        return (
            <div>
                <>
                    {isFething && <div>Loading....</div>}
                    {error && <div>error</div>}
                    <ol>
                        {data.map((phone) => <li key={phone.id}>{phone.brand} {phone.model} {phone.price}</li>)}
                    </ol>

                </>


            </div>
        );
    }
}

export default PhonesLoader;
