import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import TaskAdd from './Component/TaskAdd';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Login" />} />
          <Route path="Login" element={<Login />}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="TaskAdd" element={<TaskAdd />}></Route>
          <Route path='TaskAdd/:id' element={<TaskAdd />}></Route>
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
