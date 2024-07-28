// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ModeToggle from './Components/ModeToggle';
import NeonCursor from './Components/NeonCursor';
import AppRoutes from './Routes.jsx';

function App() {
  return (
    <>
       <AppRoutes />
      <ModeToggle />
      <NeonCursor />
    </>
   
  );
}

export default App;
