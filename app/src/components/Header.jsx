import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="./logo.png" alt="logo" />
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>About</Link>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleSidebar}>Gallery</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="menu-toggle" onClick={toggleSidebar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>

      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>About</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleSidebar}>Gallery</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
