/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Link from "next/link";

const AboutThree = () => {
  return (
    <div className="about-area bg-sky pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 align-self-center "
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <div className="section-title mb-0">
              <h6 className="sub-title">// Sobre Zión Adminsitradora</h6>
              <h2 className="title">Misión</h2>
              <p className="content mb-4">
              Nuestra misión es ofrecer una administración eficiente, transparente e integral a su condominio con un servicio profesional y de alta calidad, mediante soluciones integrales y acorde a los requerimientos específicos de cada condominio, con el objetivo de lograr una mejor calidad de vida, conservación de su patrimonio e incremento en su plusvalía, administrando de forma eficiente, clara y transparente los recursos económicos y humanos.
              </p>
              <h2 className="title">Visión</h2>
              <p className="content mb-4">
              Ser más allá de lo que somos, para consolidarnos como la mejor empresa de administración.
              </p>
              <div className="btn-wrap">
                <Link className="btn btn-base border-radius" href="#contact-us">
                  Conversemos
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
