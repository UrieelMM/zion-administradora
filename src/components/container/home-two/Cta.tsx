/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import shape from "public/images/bg/shape2.png";

const Cta = () => {
  return (
    <div className="call-to-action-area bg-parallax pd-top-120 pd-bottom-120 cus-sha">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7 col-md-10 align-self-center">
            <div className="section-title style-white mb-0 text-center" style={{textShadow: "2px 3px 0  rgba(0,0,0, .5)"}}>
              <h2 className="title">
                Gestión Integrarl para tu Condominio
              </h2>
              <div className="btn-wrap">
                <Link
                  className="btn btn-black border-radius me-2"
                  href="#contact-us"
                >
                  Trabaja con nosotros
                </Link>
                <Link className="btn btn-base border-radius" href="#contact-us">
                  Conversemos
                </Link>
                <Image className="top_image_bounce" src={shape} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
