
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BiCategoryAlt } from "react-icons/bi";
import { SlMenu } from "react-icons/sl";
import { FaCube } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";





const Sidebar = () => {
  return (
    <div className="flex flex-col w-[25%] bg-[#FAFAFA] h-screen text-black">
      <nav className="flex-1 mt-5">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded text-xl ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center">
                    <FaHome size={24} className="mr-3" /> {/* Increased icon size */}
                    Home
                  </div>
                  {isActive && <FaArrowRight size={18} className="text-black" />} {/* Arrow when active */}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Category"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded text-xl ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center">
                    <BiCategoryAlt size={24} className="mr-3" /> {/* Increased icon size */}
                    Category
                  </div>
                  {isActive && <FaArrowRight size={18} className="text-black" />} {/* Arrow when active */}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Subcategory"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded text-xl ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center">
                    <SlMenu size={24} className="mr-3" /> {/* Increased icon size */}
                    Subcategory
                  </div>
                  {isActive && <FaArrowRight size={18} className="text-black" />} {/* Arrow when active */}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Product"
              className={({ isActive }) =>
                `flex items-center justify-between p-3 rounded text-xl ${isActive ? 'bg-[#F4EDAF]' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center">
                    <FaCube size={24} className="mr-3" /> {/* Increased icon size */}
                    Product
                  </div>
                  {isActive && <FaArrowRight size={18} className="text-black" />} {/* Arrow when active */}
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );

};

export default Sidebar;
