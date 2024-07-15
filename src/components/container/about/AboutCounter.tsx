import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutCounter = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="counter-area bg-sky pd-top-110 pd-bottom-90">
      <div className="container">
        <div className="counter-area-inner">
          <h2 className="overlay-title">Zión Administradora</h2>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <div className="single-counter-inner text-center">
                <h2>
                  <span className="counter" ref={ref}>
                    {inView && <CountUp start={0} end={30} duration={3} />}
                  </span>{" "}
                  k
                </h2>
                <h6>Residentes satisfechos</h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <div className="single-counter-inner text-center">
                <h2>
                  <span className="counter" ref={ref}>
                    {inView && <CountUp start={0} end={40} duration={3} />}
                  </span>
                </h2>
                <h6>Condiminios administrados</h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <div className="single-counter-inner text-center">
                <h2>
                  <span className="counter" ref={ref}>
                    {inView && <CountUp start={0} end={10} duration={3} />}
                  </span>{" "}
                  +
                </h2>
                <h6>Años de experiencia</h6>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="single-counter-inner text-center">
                <h2>
                  <span className="counter" ref={ref}>
                    {inView && <CountUp start={0} end={1000} duration={2} />}
                  </span>{" "}
                  
                </h2>
                <h6>Operaciones registradas cada mes</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
