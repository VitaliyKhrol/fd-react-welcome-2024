import React from "react";
import {userData} from "./components/Greeting/userData";
import UserCard from "./components/UserCard";
import './components/UserCard/style.css'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users: userData,
      isSort: true,
    }
  }

userMap =()=> this.state.users.map((userObj)=> < UserCard user ={userObj} userkey= {userObj.id}/>)


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
      <section className="root">
        <button onClick={this.sortUsers}>Sorted</button>
        <div className="card-container">
           {this.userMap()}
        </div>
       
          </section>
    )
  }
}


export default App;