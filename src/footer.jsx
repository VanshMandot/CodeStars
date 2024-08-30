import React from 'react';
import './footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="https://www.instagram.com/djsce_codestars/" target="_blank" rel="noopener noreferrer" className="footer-link insta">
                    <i className="fa fa-instagram footer-icon"></i>
                </a>
                <a href="https://in.linkedin.com/company/dj-codestars" target="_blank" rel="noopener noreferrer" className="footer-link linkdln">
                    <i className="fa fa-linkedin-square footer-icon"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
