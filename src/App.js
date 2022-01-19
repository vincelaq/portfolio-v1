import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <Router>
            <Navigation/>
            <main className='h-full'>
                <HomePage/>
            </main>
        </Router>
    )
}

export default App;
