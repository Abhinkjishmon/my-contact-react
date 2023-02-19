import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Favourite from './pages/Favourite';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>

  );
}

export default App;
