import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tree from './components/Tree';
import UserContext from "./contexts/UserContext";
import ThemeContext from "./contexts/ThemeContext";
import Header from "./components/Header";
import CONSTANTS  from "./constants";

const {THEMES}= CONSTANTS;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: 'Jonh',
        lastName: 'Doe',
        email: 'www@gmail.com',
        avatar: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
      },
      theme: THEMES.DARK,
    }
  }

  changeThemeCallback =(theme)=>{
    this.setState({
      theme: theme
    })
  }

  logOutCallback = () => {
    this.setState({
      user: {}
    })
  }

  render() {
    const {user,theme} = this.state;

    return (
      <ThemeContext.Provider value={[theme,this.changeThemeCallback]}>
        < UserContext.Provider value={[user, this.logOutCallback]} >
          <Header />
          <Tree />
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App;