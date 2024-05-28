import React from "react";
import Greeting from './components/Greeting';
import {userData} from "./components/Greeting/userData";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users: userData,
      isSort: true,
    }
  }

userMap =()=> this.state.users.map((userObj)=> < Greeting userName={userObj.name} key= {userObj.id}/>)


sortUsers =()=>{
  console.log(this.state)
    const newUsers =[...this.state.users];
    newUsers.sort((a,b)=>(a.name>b.name && this.state.isSort ? 1 : -1));

    this.setState({
      users: newUsers,
      isSort:!this.state.isSort
    })
    }

  render() {
    return (
      <section>
        <button onClick={this.sortUsers}>Sorted</button>
        {this.userMap()}
      </section>
    )
  }
}


export default App;