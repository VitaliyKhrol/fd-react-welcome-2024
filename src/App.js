import React from "react";
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
// import FlexContainer from "./components/FlexContainer";
// import styles from './components/FlexContainer/FlexContainer.module.css'
import ImageWrapper from './components/ImageWrapper'


class App extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {

    return (<>

      <ImageWrapper
        width='200px'
        height='300px'
        onClick={() => { console.log('Hello') }}>
        <img src='https://s00.yaplakal.com/pics/pics_preview/5/0/6/17827605.jpg' width={'100%'} />

      </ImageWrapper>

      <ImageWrapper
        width='200px'
        height='300px'
        title='my super picture'>
        <img src='https://s00.yaplakal.com/pics/pics_preview/5/0/6/17827605.jpg' width={'100%'} />

      </ImageWrapper>
    </>
    )
  }
}


export default App;