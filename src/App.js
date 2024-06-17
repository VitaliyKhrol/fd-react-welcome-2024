import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import LoginForm from './components/LoginForm';
import TodoList from './components/Todolist';
import CouterPage from './pages/CounterPage'
import LoaderPage from "./pages/LoaderPage";



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <BrowserRouter>
      <ul>
          <li> <Link to="/">Go to Home</Link>  </li> 
          <li> <Link to="/counter">Go to CounterPage</Link>  </li> 
          <li> <Link to="/login">Go to LoginForm</Link> </li>
          <li> <Link to="/todo">Go to ToDo</Link></li>
          <li> <Link to="/loader">Go to LoaderPages</Link></li>
      </ul> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/counter" element={<CouterPage/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/todo" element={<TodoList/>}/>
          <Route path="/loader" element={<LoaderPage/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>

      </BrowserRouter>
    )
  }
}


export default App;

const NotFound =()=>{
  return <div>Page not Found</div>
}

const Home =()=>{
  return <h1>You are home now</h1>
}