import React from "react";
// import UserDashboard from "./components/UserDashboard";
// import Tree from "./components/Tree";
// import Timer from "./components/Timer";
// import Scene from "./components/Scene/";
// import LoginForm from './components/LoginForm';
// import Todolist from "./components/Todolist";
import Header from "./components/Header";
import styles from './components/Header/Header.module.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
      user: {
        firstName: 'Alex',
        lastName: 'Doe',
        avatar: 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1'
      }
    }
  }

  render() {
    const { user: { firstName, lastName, avatar } } = this.state;
    return (

      <Header text='gfhhhhf'>
        <div>
          <img src={avatar} className={styles.avatar} />
          <span>{firstName}  {lastName}</span>
        </div>
      </Header>


    )
  }
}


export default App;