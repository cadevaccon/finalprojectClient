import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Login from './Components/Login';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Post from './Components/Post';

function App() {
  return (
      <>
      <Navbar/>
    <BrowserRouter>
    <Switch >
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}></Route>
    <Route exact path="/myposts" component={Post}></Route>
    <Route exact path='/profile' component={Profile}></Route>
    
    </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
