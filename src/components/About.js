import React from "react";
import styled from "styled-components";
import aboutimg from '../assets/img/about-img.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  FaCircle
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <>
      <AboutContainer>
      <section id="about" class="about">

<div class="container" data-aos="fade-up">
  <div class="row">

    <div class="col-lg-5 col-md-6">
      <div class="about-img" data-aos="fade-right" data-aos-delay="100">
        <img src={aboutimg} alt="" />
      </div>
    </div>

    <div class="col-lg-7 col-md-6">
      <div class="about-content" data-aos="fade-left" data-aos-delay="100">
        <h2>About Us</h2>
        <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
        <ul>
          <li><FaCircle/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><FaCircle />  Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li><FaCircle />  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</section>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div`
  #about {
    padding: 80px 0;
  }

  #about .about-content {
    padding-top: 40px;
  }

  #about .about-content h2 {
    color: #413e66;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }

  #about .about-content h3 {
    color: #696592;
    font-weight: 400;
    font-size: 22px;
    font-style: italic;
  }
  a {
  text-decoration: none;
}
  #about .about-content ul {
    list-style: none;
    padding: 0;
    color: black;
  }

  #about .about-content ul li {
    padding-bottom: 10px;
    color: black;
  }

  #about .about-content ul li i {
    font-size: 20px;
    padding-right: 4px;
    color: #1bb1dc;
  }

  #about .about-img {
    position: relative;
    margin: 30px 30px 30px 30px;
  }

  #about .about-img img {
    width: 100%;
    border: 8px solid #fff;
    transition: 0.5s;
  }

  #about .about-img img:hover {
    width: 100%;
    transform: scale(1.03);
  }

  #about .about-img::before {
    position: absolute;
    left: -31px;
    top: -30px;
    width: 90%;
    height: 92%;
    z-index: -1;
    content: "";
    background-color: #ebf1fa;
    transition: 0.5s;
  }

  #about .about-img::after {
    position: absolute;
    right: -31px;
    bottom: -30px;
    width: 90%;
    height: 92%;
    z-index: -1;
    content: "";
    background-color: #ebf1fa;
    transition: 0.5s;
  }
`;
