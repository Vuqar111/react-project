import React from "react";
import styled from "styled-components";
import whyusimg from '../assets/img/why-us.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaBox
} from "react-icons/fa";


import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const WhyUs =  () => {
return (
    <>
<WhyUsContainer>

<section id="why-us" class="why-us">
      <div class="container-fluid" data-aos="fade-up">

        <header class="section-header">
          <h3>Why choose us?</h3>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
        </header>

        <div class="row">

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="why-us-img">
              <img src={whyusimg} alt="" class="img-fluid" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="why-us-content">
              <p>Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem impedit. Odio dolorum exercitationem est error omnis repudiandae ad dolorum sit.</p>
              <p>
                Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro facilis deleniti porro consequatur
                et temporibus. Labore est odio.

                Odio omnis saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil repellat..
              </p>

              <div class="features clearfix" data-aos="fade-up" data-aos-delay="100">
                <FaBox  id="icon1"/>
                <h4>Corporis dolorem</h4>
                <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>
              </div>

              <div class="features clearfix" data-aos="fade-up" data-aos-delay="200">
              <FaBox  id="icon1"/>
                <h4>Eum ut aspernatur</h4>
                <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
              </div>
              <div class="features clearfix" data-aos="fade-up" data-aos-delay="300">
              <FaBox id="icon1"/>
                <h4>Voluptates dolores</h4>
                <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</WhyUsContainer>
    </>
)
}
export default WhyUs;

const WhyUsContainer = styled.div`
#why-us {
  padding: 60px 0;
}

@media (max-width: 991px) {
  #why-us .why-us-content {
    padding-top: 30px;
  }
}

#why-us .why-us-content .features {
  margin: 0 0 15px 0;
  padding: 0;
}

#icon1 {
  font-size: 36px;
  float: left;
}

#why-us .why-us-content .features h4 {
  font-size: 24px;
  font-weight: 600;
  margin-left: 56px;
  color: #413e66;
  margin-bottom: 5px;
}

#why-us .why-us-content .features p {
  font-size: 16px;
  margin-left: 56px;
  color: #555186;
}
.section-header h3 {
  font-size: 36px;
  color: #413e66;
  text-align: center;
  font-weight: 700;
  position: relative;
  font-family: "Montserrat", sans-serif;
}

.section-header p {
  text-align: center;
  margin: auto;
  font-size: 15px;
  padding-bottom: 60px;
  color: #535074;
  width: 50%;
}
a {
  text-decoration: none;
}
@media (max-width: 767px) {
  .section-header p {
    width: 100%;
  }
}




`