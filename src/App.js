import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Profil from './Pages/Profil';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Error from './Pages/Error';
import NavBar from './Components/NavBar';
import {useState} from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  const [isAuthorised, setIsAuthorised] = useState(false)
  return (

    <div className="App">
      <NavBar/>
      <h1>Checkpoint API</h1>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/Users' element= {<Users/>}/>
        <Route path='/user/:id' element= {<Profil/>}/>

        <Route path="/admin" element = {<PrivateRoute isAuthorised={isAuthorised}/>}>
          
        <Route path='/admin' element= {<Admin/>}/>
        
        </Route>
        
        <Route path='/Login' element= {<Login/>}/>
        <Route path='/*' element= {<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
