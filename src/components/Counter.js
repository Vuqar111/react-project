import React from 'react'
import CountUp  from 'react-countup'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Counter () {
  return (

<CounterContainer class="container">
<div class="row counters" data-aos="fade-up" data-aos-delay="100">

  <div class="col-lg-3 col-6 text-center">
  <CountUp end={600} duration={5}  className="purecounter"/>  
  <p>Clients</p>
  </div>

  <div class="col-lg-3 col-6 text-center">
  <CountUp end={400} duration={5}   className="purecounter"/>
    <p>Projects</p>
  </div>

  <div class="col-lg-3 col-6 text-center">
  <CountUp end={800} duration={5}   className="purecounter"/>
    <p>Hours Of Support</p>
  </div>

  <div class="col-lg-3 col-6 text-center">
  <CountUp end={600} duration={5} className="purecounter"/> 
    <p>Hard Workers</p>
  </div>

</div>

</CounterContainer>
  )
}

export default Counter;


const CounterContainer = styled.div`

 .counters {
  padding-top: 40px;
}
 .counters .purecounter {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 48px;
  display: block;
  color: #555186;
}

.counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #8a87b6;
}

`



