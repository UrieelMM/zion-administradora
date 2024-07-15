/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/images/bg/10.png";
import Two from "public/images/bg/9.png";
import Three from "public/images/bg/8.png";
import Four from "public/images/bg/6.png";
import Five from "public/images/bg/1.webp";

const CallBack = () => {
  return (
    <div className="contact-area pd-top-110 bg-cover pd-bottom-120" id="contact-us">
      <Image className="bg-img-1" src={One} alt="img" />
      <Image className="bg-img-2" src={Two} alt="img" />
      <Image
        className="bg-img-3 "
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="300"
        src={Five}
        alt="Banner"
        style={{width: "548px", height: "680px", objectFit: "cover"}}
      />
      <Image className="bg-img-4 left_image_bounce" src={Three} alt="img" />
      <div className="container">
        <div className="contact-inner">
          <div className="row">
            <div className="col-xl-7 col-lg-7 offset-xl-5 offset-lg-5">
              <div className="contact-from-inner">
                <Image
                  className="ci-bg-img-1 top_image_bounce"
                  src={Four}
                  alt="img"
                />
                <div className="section-title mb-4">
                  <h6 className="sub-title">// CONTÁCTANOS</h6>
                  <h2 className="title">Envíanos un mensaje</h2>
                </div>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input-inner">
                        <input type="text" placeholder="Nombre" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-inner">
                        <input type="text" placeholder="Teléfono" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-inner">
                        <input type="text" placeholder="Email" />
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="single-input-inner">
                        <input type="text" placeholder="Tu mensaje" />
                      </div>
                    </div> */}
                    <div className="col-lg-12">
                      <div className="single-input-inner">
                        <textarea placeholder="Tu mensaje"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-black border-radius">
                        Enviar mensaje
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBack;
