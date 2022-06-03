import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Wrapper from "./components/Wrapper";

function App() {
  return (
      <Wrapper>
          <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/create'} element={<CreatePost/>} />
            </Routes>
          </BrowserRouter>
      </Wrapper>
  );
}

export default App;
