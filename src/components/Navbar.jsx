import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { FaUser } from 'react-icons/fa'; // User icon from react-icons

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 bg-[#662671] text-white"> {/* Changed to bg-purple-600 */}
            <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold">
                    <img src="/public/Images/navlogo.png" alt="Logo" className="h-7 w-auto" />
                </Link>
            </div>
            <div className="flex items-center">
                <Link to="/profile" className="text-xl ">
                    <FaUser />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
