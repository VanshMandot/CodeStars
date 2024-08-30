import React, { useEffect, useState } from 'react';
import './scoreboard.css';

function Scoreboard() {
    const [scoreboardData, setScoreboardData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', codeforce_username: '' });

    useEffect(() => {
        fetch('/scoreboard.json')
            .then(response => response.json())
            .then(data => {
                setScoreboardData(data.scoreboard || []);
            })
            .catch(error => console.error('Error fetching scoreboard data:', error));
    }, []);

    const handleAddUserClick = () => {
        setShowForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        setShowForm(false);
        setNewUser({ name: '', codeforce_username: '' });
    };

    const sortedData = [...scoreboardData].sort((a, b) => (b.Solved || 0) - (a.Solved || 0));

    return (
        <div className="scoreboard">
            <header className=" header header-scoreboard">
                <div><h1>Scoreboard</h1></div>
            </header>
            <div className='input-panel'>
                <div className='add-to-scoreboard'>
                    <button className='button add-button' onClick={handleAddUserClick}>Add Codeforce URL</button>
                </div>
                <div className='search-scoreboard'>
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="button search-button"> Search </button>
                </div>
            </div>

            {showForm && (
                <div className="form-overlay">
                    <div className="form-container">
                        <h2>Add User</h2>
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Codeforce Username:
                                <input
                                    type="text"
                                    name="codeforce_username"
                                    value={newUser.codeforce_username}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <button type="submit" className="button">Submit</button>
                            <button type="button" className="button cancel-button" onClick={() => setShowForm(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
            

            <div className="table-container">
                <table className="scoreboard-table">
                    <thead className='table-header'>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Link</th>
                            <th>Solved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.length > 0 ? (
                            sortedData.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name || 'N/A'}</td>
                                    <td>
                                        {user.codeforce_username ? (
                                            <a href={`https://codeforces.com/profile/${user.codeforce_username}`} target="_blank" rel="noopener noreferrer"> URL </a>
                                        ) : 'N/A'}
                                    </td>
                                    <td>{user.Solved || 0}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Scoreboard;
