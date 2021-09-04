import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Icon from '@material-ui/core/Icon';
import {AiOutlineTwitter } from 'react-bootstrap-icons';
import {FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram

} from "react-icons/fa";

AOS.init();


const Footer  = () => {
return (
    <>

    <FooterContainer>

    <footer id="footer" class="section-bg">
    <div class="footer-top">
      <div class="container">

        <div class="row">

          <div class="col-lg-6">

            <div class="row">

              <div class="col-sm-6">

                <div class="footer-info">
                  <h3>Rapid</h3>
                  <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                </div>

                <div class="footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem.</p>

                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </div>

              </div>

              <div class="col-sm-6">
                <div class="footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Privacy policy</a></li>
                  </ul>
                </div>

                <div class="footer-links">
                  <h4>Contact Us</h4>
                  <p>
                    A108 Adam Street <br/>
                    New York, NY 535022<br/>
                    United States <br/>
                    Phone: +1 5589 55488 55
                    Email: info@example.com
                  </p>
                </div>

                <div class="social-links">
                  <a href="#" className="twitter"><FaTwitter/></a>
                  <a href="#" className="facebook"><FaFacebook/></a>
                  <a href="#" className="instagram"><FaInstagram /></a>
                  <a href="#" className="linkedin"><FaLinkedin/></a>
                </div>

              </div>

            </div>

          </div>

          <div class="col-lg-6">

            <div class="form">

              <h4>Send us a message</h4>
              <p>Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis quasi sit eaque numquam similique commodi harum aut temporibus.</p>
              
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div class="form-group mt-3">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
            

            </div>

          </div>

        </div>

      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

    </FooterContainer>

    </>
)
}

export default Footer;


const FooterContainer = styled.div`
#footer {
  padding: 0 0 30px 0;
  font-size: 14px;
  background: #fff;
}

#footer .footer-top {
  padding: 60px 0 30px 0;
  background: #f5f8fd;
}

#footer .footer-top .footer-info {
  margin-bottom: 30px;
}

#footer .footer-top .footer-info h3 {
  font-size: 34px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  color: #413e66;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#footer .footer-top .footer-info p {
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Montserrat", sans-serif;
  color: #535074;
}

#footer .footer-top .social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #1bb1dc;
  color: #fff;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a i {
  line-height: 0;
  font-size: 16px;
}

#footer .footer-top .social-links a:hover {
  background: #0a98c0;
  color: #fff;
}

@media (max-width: 574px) {
  #footer .footer-top .social-links a {
    margin-bottom: 25px;
  }
}

#footer .footer-top h4 {
  font-size: 14px;
  font-weight: bold;
  color: #413e66;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 10px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul li {
  padding: 8px 0;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #696592;
}

#footer .footer-top .footer-links ul a:hover {
  color: #1bb1dc;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact p {
  line-height: 26px;
}

#footer .footer-top .footer-newsletter {
  margin-bottom: 30px;
}

#footer .footer-top .footer-newsletter input[type="email"] {
  border: 0;
  padding: 6px 8px;
  width: 65%;
  border: 1px solid #d9dde6;
}

#footer .footer-top .footer-newsletter input[type="submit"] {
  background: #1bb1dc;
  border: 1px solid #1bb1dc;
  width: 35%;
  padding: 6px 0;
  text-align: center;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
}

#footer .footer-top .footer-newsletter input[type="submit"]:hover {
  background: #0a98c0;
}
a {
  text-decoration: none;
}
#footer  .validate {

  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}



#footer .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

#footer  input, #footer .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  border: 1px solid #dce1ec;
  font-size: 14px;
}

#footer  input:focus, #footer .php-email-form textarea:focus {
  border-color: #1bb1dc;
}

#footer  input {
  padding: 10px 15px;
}

#footer  textarea {
  padding: 12px 15px;
}

#footer  button[type="submit"] {
  background: #1bb1dc;
  border: 0;
  border-radius: 3px;
  padding: 8px 30px;
  color: #fff;
  transition: 0.3s;
  margin-top: 15px;
}

#footer  button[type="submit"]:hover {
  background: #0a98c0;
  cursor: pointer;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#footer .copyright {
  text-align: center;
  padding-top: 30px;
  color: #535074;
  font-size: 15px;
}

#footer .credits {
  text-align: center;
  font-size: 14px;
  padding-top: 4px;
  color: #8582a8;
}

#footer .credits a {
  color: #1bb1dc;
}

#footer .credits a:hover {
  color: #0a98c0;
}



`;