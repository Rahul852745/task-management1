import './App.css';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import TaskAdd from './Component/TaskAdd';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Login" />} />
          <Route path="Login" element={<Login />}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="TaskAdd" element={<TaskAdd />}></Route>
          <Route path='TaskAdd/:id' element={<TaskAdd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
