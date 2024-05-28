import React from "react";
import Greeting from './components/Greeting'



class App extends React.Component {
  constructor(props){
    super(props);
}


  render() {
    return (
      <section>
        <Greeting userName='John' userF='Doe' />
        <Greeting userName='John' userF='Doe' />
        <Greeting userName='Alex' userF='Doe' />
        <Greeting userName='John' userF='Doe' />
        <Greeting userName='Ivan' userF='Doe' />
      </section>
    )
  }

}


export default App;