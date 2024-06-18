import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tree from './components/Tree';
import UserContext from "./contexts";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: 'Jonh',
        lastName: 'Doe',
        email: 'www@gmail.com',
        avatar: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
      }
    }
  }

  logOutCallback=()=>{
    this.setState({
      user:{}
    })
  }

  render() {
    console.log(UserContext)

    return(
    < UserContext.Provider value={[this.state.user, this.logOutCallback]} >
      <Tree />
    </UserContext.Provider>
    )
  }
}

export default App;