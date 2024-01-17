 
import React from 'react';
import './navBar.css';
import logo from '../../assets/linkedin_logo.jpg';

const Navbar = () => {
  return (
    <nav>
    <div class="nav-left">
        <img src={logo} />
        <div class="input-div">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search"/>
        </div>
    </div>
    <div class="nav-center">
        <div class="nav-box">
            <i class="fa-solid fa-house"></i>
            <p>Home</p></div>
        <div class="nav-box">
            <i class="fa-solid fa-person"></i>
            <p>My Networks</p></div>
        <div class="nav-box">
            <i class="fa-solid fa-bag-shopping"></i>
            <p>Jobs</p></div>
        <div class="nav-box">
            <i class="fa-solid fa-message"></i>
            <p>Messaging</p></div>
        <div class="nav-box">
            <i class="fa-solid fa-bell"></i>
            <p>Notifications</p></div>
        <div class="nav-box">
            <img src="Images/M logo.jpg" alt=""/>
            <p>Me</p></div>
    </div>
    <div class="nav-right">
        <div class="nav-right-left">
            <i class="fa-solid fa-grip"></i>
            <p>For Business</p>
        </div>
        <div class="nav-right-right">
            Try Premium for <br/>PKRO
        </div>
    </div>
</nav>
  );
};

export default Navbar;
