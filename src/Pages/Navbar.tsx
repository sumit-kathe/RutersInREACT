import { Link } from "react-router-dom";

import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="maindiv">
        <div className="singlediv">
          {" "}
          <Link to="/">Home</Link>{" "}
        </div>

        <div  className="singlediv">
          {" "}
          <Link to="/about">About</Link>{" "}
        </div>
        <div className="singlediv">
          {" "}
          <Link to="/contact">COntact Us</Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Navbar;
