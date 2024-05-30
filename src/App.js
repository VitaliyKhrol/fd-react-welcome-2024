import React from "react";
// import UserDashboard from "./components/UserDashboard";
// import Tree from "./components/Tree";
// import Timer from "./components/Timer";
// import Scene from "./components/Scene/";
import LoginForm from './components/LoginForm'


class App extends React.Component {
constructor (props){
  super(props);
  this.state={
    isOn: true,
  }
}

  render() {
    return (
    
       <LoginForm/> 
    
      
    )
  }
}


export default App;