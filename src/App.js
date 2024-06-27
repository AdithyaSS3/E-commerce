import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import LoginPage from './Pages/Loginpage';
import SignupPage from './Pages/SignupPage';
import CartPage from './Pages/CartPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('token', user.token); 
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token'); 
  };

  return (
    <Router>
      <div>
         <Routes>
         <Route path="/" exact Component={Home} >
         
          </Route>
          <Route path="/Login" Component={LoginPage} onLogin={handleLogin} >
            
          </Route>
          <Route path="/Signup" Component={SignupPage}>
           
          </Route>
          <Route path="/Cart" Component={CartPage}>
            
          </Route>
         </Routes>
       
        {currentUser ? (
          <div>
            <p>Welcome, {currentUser.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>Please login or signup</p>
        )}
      </div>
    </Router>
  );
};

export default App;
