import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Error from './Pages/Error';

function App() {
    return (
        <Router>
            <nav
                style={{
                    
                }}
            >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/profile/:userName" element={ <Profile/> } />
                <Route path="*" element={ <Error/> } />
            </Routes>
        </Router>
    );
}

export default App;
