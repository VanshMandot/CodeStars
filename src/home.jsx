import React from 'react';
import './home.css';
import Team from './teamcard';

const title = "DJS-CodeStars";
const letters = title.split('').map((letter, index) => (
    <span key={index} className="letter">{letter}</span>
));

function Home() {
    return (
        <div className="home">
            <div className="content-container">
            <header className="header header-home">
                <h1>{letters}</h1>
            </header>
            <p className="club-description">
                We are the official Competitive Programming Club of our college. We are India's largest CP community spreading the culture of this Sport of programming.<br/><br/>
                <span className="hidden-text">AC on CodeForces, AC in Life✨✨✨<br/>
                    <span className='Animation'>Code! Sleep! Repeat!</span>
                </span>
            </p>
            </div>
            <div className="team-section">
                <h2 className="team-title">TEAM</h2>
                <Team />    
            </div>
        </div>
    );
}

export default Home;
