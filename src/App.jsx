// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Register from "./Pages/Register.jsx";
import './App.css'
import Login from "./Pages/Login.jsx";

const App = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </>
  );
};

export default App;