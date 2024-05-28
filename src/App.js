import React from "react";
import Greeting from './components/Greeting'

const userArray =['John', 'Alex', 'Ivan', 'Jane','Jake']

class App extends React.Component {
  constructor(props){
    super(props);
}

userMap =()=> userArray.map((name)=> <Greeting userName={name} />)



  render() {
    return (
      <section>
        {this.userMap()}
      </section>
    )
  }

}


export default App;