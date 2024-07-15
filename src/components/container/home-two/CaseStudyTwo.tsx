/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/case-study/BalconesTepeyac.jpg";
import Two from "public/images/case-study/Bosques.jpg";
import Three from "public/images/case-study/VidaTepeyac.jpg";

const CaseStudyTwo = () => {
  return (
    <div className="case-study-area pd-top-110 pd-bottom-90">
      <div className="container">
        <div className="section-title">
          <div className="row">
            <div className="col-lg-7 pe-xl-5 align-self-center">
              <h6 className="sub-title">// Experiencia</h6>
              <h2 className="title">
                Algunos de nuestros clientes
              </h2>
            </div>
            {/* <div className="col-lg-5 align-self-end">
              <p className="content">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, search for &apos;lorem
                ipsum&apos; will uncover{" "}
              </p>
              <div className="btn-wrap">
                <Link className="btn btn-base border-radius/ me-2" href="about">
                  View All Residencial
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-case-study-inner">
              <div className="thumb">
                <Image src={One} alt="Residencial" style={{height: "300px"}} />
                {/* <Link className="case-view-btn" href="/case-study-details">
                  <span>Ver todos</span> +
                </Link> */}
              </div>
              <div className="details">
                <p>Residencial</p>
                <h4>
                  <Link href="/">
                    Balcones Tepeyac
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-case-study-inner">
              <div className="thumb">
                <Image src={Two} alt="Residencial" style={{height: "300px"}} />
                {/* <Link className="case-view-btn" href="/case-study-details">
                  <span>Ver todos</span> +
                </Link> */}
              </div>
              <div className="details">
                <p>Residencial</p>
                <h4>
                  <Link href="/case-study-details">
                    Bosque de Leones 5906
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-case-study-inner">
              <div className="thumb">
                <Image src={Three} alt="Residencial"  style={{height: "300px"}} />
                {/* <Link className="case-view-btn" href="/case-study-details">
                  <span>Ver todos</span> +
                </Link> */}
              </div>
              <div className="details">
                <p>Residencial</p>
                <h4>
                  <Link href="/case-study-details">Vida Tepeyac</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTwo;
