import React, { Component } from 'react';

class DataProvader extends Component {
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
        const layout = this.props.children(this.state);
        return layout
    }
}

export default DataProvader;
