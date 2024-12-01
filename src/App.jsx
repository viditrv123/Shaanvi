// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Register from "./Pages/Register.jsx";

const App = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<Register />} />
        </Routes>
      </>
  );
};

export default App;