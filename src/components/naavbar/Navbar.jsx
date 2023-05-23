import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link style={{textDecoration:"none"}} to="/"><div className="logo">NewsWave</div></Link>
      <div className="item">
        <Link style={{textDecoration:"none"}} to="/"><span>Home</span></Link>
        <Link style={{textDecoration:"none"}} to="/general"><span>General</span></Link>
        <Link style={{textDecoration:"none"}} to="/business"><span>Business</span></Link>
        <Link style={{textDecoration:"none"}} to="/entertainment"><span>Entertainment</span></Link>
        <Link style={{textDecoration:"none"}} to="/health"><span>Health</span></Link>
        <Link style={{textDecoration:"none"}} to="/science"><span>Science</span></Link>
        <Link style={{textDecoration:"none"}} to="/sports"><span>Sports</span></Link>
        <Link style={{textDecoration:"none"}} to="/technology"><span>Technology</span></Link>
      </div>
    </div>
  );
};

export default Navbar;
