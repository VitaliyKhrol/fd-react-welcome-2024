import React from "react";
// import UserDashboard from "./components/UserDashboard";
// import Tree from "./components/Tree";
// import Timer from "./components/Timer";
// import Scene from "./components/Scene/";
// import LoginForm from './components/LoginForm';
// import Todolist from "./components/Todolist";
// import Header from "./components/Header";
// import styles from './components/Header/Header.module.css'
import Container from "./components/Grid/GridContainer";
import Column from "./components/Grid/Column";
import Row from "./components/Grid/Row";


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <Container>
        <Row>
          <Column colNum='12'>
            Full-width element
          </Column>
        </Row>

        <Row>
          <Column colNum='6'>
            Half-width element
          </Column>
          <Column colNum='6'>
            Half-width element
          </Column>
        </Row>

        <Row>
          <Column colNum='3'>
           Quard-width element
          </Column>
          <Column colNum='3'>
           Quard-width element
          </Column>
          <Column colNum='3'>
           Quard-width element
          </Column>
          <Column colNum='3'>
           Quard-width element
          </Column>
        </Row>

      </Container>

    )
  }
}


export default App;