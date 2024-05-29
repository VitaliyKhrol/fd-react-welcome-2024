import React from "react";
// import UserDashboard from "./components/UserDashboard";
// import Tree from "./components/Tree";
import Timer from "./components/Timer";

class App extends React.Component {
constructor (props){
  super(props);
  this.state={
    isOn: true,
  }
}

  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({isOn:false})}} >Timer</button>
        {this.state.isOn ? <Timer /> :null}
      </div>
      
    )
  }
}


export default App;