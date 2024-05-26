/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";

import One from "public/images/about/1.webp";
import Two from "public/images/about/2.webp";
import Three from "public/images/about/3.png";
import Four from "public/images/about/4.png";
import Five from "public/images/about/11.png";

import Link from "next/link";

const AboutTwo = () => {
  return (
    <div id="about-area" className="about-area pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-9 "
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="about-thumb-area cussi-about-thumber">
              <Image className="about-img-1" src={One} alt="img" />
              <Image className="about-img-2 cus-img-2" src={Two} alt="img" />
              <Image
                className="about-img-3 top_image_bounce"
                src={Three}
                alt="img"
              />
              <Image
                className="about-img-4 top_image_bounce"
                src={Four}
                alt="img"
              />
              <div className="exp-wrap">
                <div className="exp-inner">
                  <h2>+ 10</h2>
                  <p>Años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 align-self-center "
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="section-title mb-0 mt-5 mt-lg-0">
              <h6 className="sub-title">// SOBRE NOSOTROS</h6>
              <h2 className="title">
                Zión - Administradora de Condominios
              </h2>
              <p className="content">
              ZIÓN es una empresa con amplia experiencia en materia condominal, conformada por un equipo de profesionales con experiencia en la Administración de Condominios, Edificios, Plazas Comerciales, Parques Industriales, etc.
              </p>
              <p className="quote mt-4 pb-2">
                Equipo altamente calificado en la gestión de condominios y propiedades comerciales.
              </p>
              <div className="row">
                <div className="col-md-6 mt-3">
                  <h5>
                    <Image className="me-2" src={Five} alt="img" /> Equipo profesional
                  </h5>
                </div>
                <div className="col-md-6 mt-3">
                  <h5>
                    <Image className="me-2" src={Five} alt="img" /> 24/7
                    Asistencia
                  </h5>
                </div>
              </div>
              <div className="btn-wrap">
                <Link className="btn btn-base border-radius" href="/">
                  Saber más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
