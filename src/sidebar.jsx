import React from 'react';
import './sidebar.css';
import sidebarItems from './sidebarItem'; 
import logo from './assets/logo.png';

const renderSidebarItems = () => {
    return sidebarItems.map((item, index) => (
        <div className="sidebar-content" key={index}>
            <a href={item.link} className="sidebar-link">
                <i className={`fa ${item.iconClass} item-icon`} style={{ fontSize: item.fontSize }}></i>
                <span className="item-text">{item.text}</span>
            </a>
        </div>
    ));
};

function Sidebar() {
    return (
        <div className="sidebar">
            <header className="sidebar-header">
                <img src={logo} alt="CodeStars Logo" className="logo-icon" />
                <span className="logo-text">CodeStars</span>
            </header>
            <div className="sidebar-content">
                {renderSidebarItems()}
            </div>

        </div>

    );
}

export default Sidebar;