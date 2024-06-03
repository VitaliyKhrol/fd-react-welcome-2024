import React, { Component } from 'react';

import UsersList from '../UsersList';
import Spiner from '../Spiner';
import {getUsers} from '../../api'



class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null,
            isFetching: true,
            page: 1
        }
    }
    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps,prevState){
        if (this.state.page !== prevState.page){
           this.getData();  
        }
    }

    getData = () => {
        const {page} = this.state;
       getUsers({page})
            .then((data) => {
                this.setState({
                    users: data.results,
                 })
            }).catch((error) => {
                this.setState({
                    error: error,
                })

            })
            .finally(()=>{
                this.setState({
                    isFetching: false,
                })
            })
    }


    next =()=>{
        const {page} = this.state;
        this.setState({
            page: page +1
        })

    }

    prev =()=>{
        const {page} = this.state;
        if (this.state.page >1){
            this.setState({
           page:page-1
        }) 
        }        

    }


    render() {
        const { users, error, isFetching, page } = this.state;

        return (
            <section className="root">
                <button onClick={this.prev}>{'<'}</button>
                {  page  }
                <button onClick={this.next}>{'>'}</button>
           
                {users && <UsersList usersList={this.state.users}/>}
                {error && <div>{error.message}</div>}
                {isFetching && <Spiner />}
            </section>
        );
    }
}

export default UserDashboard;
