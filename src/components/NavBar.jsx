import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar nav-bg text-light mb-3">
      <div className="d-flex align-items-center"> {/* Optional container for better alignment */}
        <Link to= {"/"} className="navbar-brand text-light" href="#"><img src="" alt="" />
          <img className = "" src={"/assets/aws_logo.png"} alt="logo" style={{width: "150px"}} />
        </Link>
        <div>
          <h1 className='text-center'>Hands on lab: Build a Serverless Notification System</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
