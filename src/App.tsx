import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import { useAppDispatch } from './store/store';
import {login} from './store/reducers/login';

function App() {

  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("userLogged") ||"{}");
  useEffect(() => {
    dispatch(login(user));
  }, []);

  return (<BrowserRouter>
    <Routes>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
    </Routes>
  </BrowserRouter>)
}

export default App;
