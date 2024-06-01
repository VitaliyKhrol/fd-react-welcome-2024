import React from "react";
import FlexContainer from "./components/FlexContainer";
// import UserDashboard from "./components/UserDashboard";
// import Tree from "./components/Tree";
// import Timer from "./components/Timer";
// import Scene from "./components/Scene/";
// import LoginForm from './components/LoginForm';
// import Todolist from "./components/Todolist";
// import Header from "./components/Header";
// import styles from './components/Header/Header.module.css'
// import Container from "./components/Grid/GridContainer";
// import Column from "./components/Grid/Column";
// import Row from "./components/Grid/Row";
import styles from './components/FlexContainer/FlexContainer.module.css'


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <FlexContainer fd ='column-reverse' jc = 'space-around' ai = 'flex-start'>
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
        <div className={styles.box}>4</div>
        <div className={styles.box}>5</div>
        <div className={styles.box}>6</div>
        <div className={styles.box}>7</div>
        <div className={styles.box}>8</div>
     
      </FlexContainer> 
    )
  }
}


export default App;