import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePages/HomePage';
import Circle from './Components/Circle/Circle';
import ModeToggle from './Components/ModeToggle';
import NeonCursor from './Components/NeonCursor';


function App() {

  return (
    <>
      <HomePage  />
      <ModeToggle/>
      <NeonCursor/>
    </>
  )
}

export default App
