import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import {Navbar} from './components/navbar/navbar';
import Header from './components/headbar/headbar';
import Diet from './pages/diet/diet';
import {Home} from './pages/home/home'
import Workout from './pages/workout/workout';
import {You} from './pages/you/you';
import Schedule from './pages/schedule/schedule';
import {Calories} from './pages/calorie/calorie';
import {BPS} from './pages/bps/bps';
import {Help} from './pages/help/help.jsx';
import {Login} from './pages/login/login';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/bps" element={<BPS/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/calorie" element={<Calories/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/help" element={<Help/>}/>
        </Routes>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/workout" element={<Workout/>}/>
          <Route path="/diet" element={<Diet/>}/>
          <Route path="/you" element={<You/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
