import React from "react";
import styled from "styled-components";
import img1 from '../assets/img/features-1.svg';
import img2 from '../assets/img/features-2.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAccessibleIcon } from "react-icons/fa";
const Features = () => {
  return (
    <>
      <FeaturesContainer>
        <div id="features" class="features">
          <div class="container" data-aos="fade-up">
            <div class="row feature-item">
              <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                <img src={img1} class="img-fluid" alt="" />
              </div>
              <div
                class="col-lg-6 wow fadeInUp pt-5 pt-lg-0"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <h4>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h4>
                <p>
                  Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
                  possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
                  Deleniti quod porro sed quisquam saepe. Numquam mollitia
                  recusandae non ad at et a.
                </p>
                <p>
                  Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
                  Odit qui asperiores ea corporis deserunt veritatis quidem
                  expedita perferendis. Qui rerum eligendi ex doloribus quia
                  sit. Porro rerum eum eum.
                </p>
              </div>
            </div>

            <div class="row feature-item mt-5 pt-5">
              <div
                class="col-lg-6 wow fadeInUp order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src={img2} class="img-fluid" alt="" />
              </div>

              <div
                class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <h4>
                  Neque saepe temporibus repellat ea ipsum et. Id vel et quia
                  tempora facere reprehenderit.
                </h4>
                <p>
                  Delectus alias ut incidunt delectus nam placeat in
                  consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui
                  aut distinctio. Cumque fugit earum est quam officiis numquam.
                  Ducimus corporis autem at blanditiis beatae incidunt sunt.
                </p>
                <p>
                  Voluptas saepe natus quidem blanditiis. Non sunt impedit
                  voluptas mollitia beatae. Qui esse molestias. Laudantium
                  libero nisi vitae debitis. Dolorem cupiditate est perferendis
                  iusto.
                </p>
                <p>
                  Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore
                  sint quia modi. Numquam est aut fuga mollitia exercitationem
                  nam accusantium provident quia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FeaturesContainer>
    </>
  );
};

export default Features;

const FeaturesContainer = styled.div`
  #features {
    padding: 80px 0;
  }

  #features h4 {
    font-weight: 600;
    font-size: 24px;
  }
`;
