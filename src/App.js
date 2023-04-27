import './App.css';
import Home from "../src/components/Home/Home"
import Login from "../src/components/Login/Login"
import Signup from "../src/components/Signup/Signup"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { auth } from './firbase';
import Dashboard from './components/Dashboard';


function App() {
  const [userName, setUserName] = useState("");
  //Method Automtically Login when user signed up
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName)
      } else setUserName("");
    });
  }, []);

  return (
   <ChakraBaseProvider> 
   <Router>
    <Routes>
      <Route path='/' element={<Home name={userName}/>}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='dashboard' element={<Dashboard />}/>
    </Routes>
   </Router>
   </ChakraBaseProvider>
  );
}
export default App;
