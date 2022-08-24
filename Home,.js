import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <header>
        <h1 id="nav-title">Home</h1>
        <nav>
            <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/HandT">H & T</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Home
