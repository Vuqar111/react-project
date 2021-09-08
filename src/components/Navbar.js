import React, {useState} from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaBars} from 'react-icons/fa'
const Nav = () => {
  const [navbar, setNavbar] = useState(false)
  window.addEventListener('scroll', changenavbar);

  function changenavbar()  {
        if(window.scrollY >= 80) {
          setNavbar(true)
        }else {
          setNavbar(false)
        }
  }

  
 
  return (
    <NavContainer>
     <header id="" className={navbar ? 'header active' : 'header'}>
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Kalem</a></h1>
      
      

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a    href="#hero">Ana Səhifə</a></li>
          <li><a   href="#about">Haqqımızda</a></li>
          <li><a   href="#services">Xidmətlərimiz</a></li>
          <li><a   href="#pricing">Qiymətlərimiz</a></li>
          <li><a   href="#about">Mehsullarimiz</a></li>
          <li><a   href="#footer">Əlaqə</a></li>
        </ul>
        <FaBars className="mobile-nav-toggle"  />
      </nav>

    </div>
  </header>
    </NavContainer>
  );
};



const NavContainer = styled.nav`
 .header {
   width: 100%;
   display: flex;
   position: fixed;
   top: 0;
   align-items: center;
  transition: all 0.5s;
  z-index: 997;
  height: 90px;
  background: transparent;
}
 
a {
  color: #1bb1dc;
}

.header.active {
  background: #fff;
  height: 70px;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.3);
}
.header .logo {
  font-size: 36px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.header .logo a {
  color: #413e66;
}
a {
  text-decoration: none;
}
header .logo img {
  max-height: 40px;
}

header .social-links {
  margin: 0 0 0 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

header .social-links a {
  color: #555186;
  transition: 0.3s;
  line-height: 0;
  margin-left: 15px;
}

header .social-links a i {
  line-height: 0;
}

header .social-links a:hover {
  color: #1bb1dc;
}

@media (max-width: 992px) {
  header .social-links {
    margin: 0 15px 0 0;
  }
}

@media (max-width: 992px) {
  header .logo {
    font-size: 28px;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 24px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}



@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #413e66;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

.mobile-nav-toggle.bi-x {
  color: #fff;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }
  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(45, 43, 70, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile a {
  padding: 10px 20px;
  font-size: 15px;
  
}
a {
  color: #1bb1dc;
}
.navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
  color: #1bb1dc;
}

.navbar-mobile .getstarted {
  margin: 15px;
}



`;

export default Nav;
