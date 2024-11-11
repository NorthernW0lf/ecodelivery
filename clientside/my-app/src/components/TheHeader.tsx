import React from 'react';
import { Link } from 'react-router-dom';

interface TheHeaderProps {
    onLogout: () => void;
}

const TheHeader: React.FC<TheHeaderProps> = ({ onLogout }) => {
    return (
        <header>
            <img className="eco__image" src="/images/eco.png" width={100} height={100} alt="#"/>
            <Link to="/about">About Us</Link>
            <Link to="/transport">Transporting Service</Link>
            <Link to="/storage">Storage Service</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/tracking">Order Tracking</Link>
            <p>+7(747)111-29-30</p>
            <button
                onClick={onLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Logout
            </button>
        </header>
    );
};

export default TheHeader;
