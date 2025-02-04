import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/pics/logo.png";

const NavBarComponent = () => {
  const dark = "navDark";
  const light = "navLight";
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? dark : light;

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto logoImg"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Predictive Science Lab
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/research" className={linkClass}>
                  Research
                </NavLink>
                <NavLink to="/teaching" className={linkClass}>
                  Teaching
                </NavLink>
                <NavLink to="/people" className={linkClass}>
                  People
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
