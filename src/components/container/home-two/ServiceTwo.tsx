/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import one from "public/images/service/1.jpg";
import two from "public/images/service/2.png";
import three from "public/images/service/3.png";
import four from "public/images/service/4.jpg";
import five from "public/images/service/6.jpg";
import six from "public/images/service/7.jpg";
import seven from "public/images/service/8.jpg";
const ServiceTwo = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <>
      <div className="service-area bg-black pd-top-120 pd-bottom-120" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-8">
              <div className="tab-content" id="myTabContent">
                <div
                  className={`tab-pane fade${
                    imgTab === 0 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={three}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={two}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={one} alt="Mantenimiento" style={{width: "448px", height: "513px", objectFit: "cover"}}/>
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <h2>01.</h2>
                        <p>
                        Especialistas en reparación y mantenimiento de equipos para garantizar su funcionamiento óptimo y prolongar su vida útil.
                        </p>
                        {/* <Link href="/service">Discover More</Link> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 1 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={two}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={three}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={four} alt="Jardinería" style={{width: "448px", height: "513px", objectFit: "cover"}} />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <h2>02.</h2>
                        <p>
                        Expertos en el cuidado de áreas verdes y control de plagas, asegurando espacios exteriores saludables y atractivos.
                        </p>
                        {/* <Link href="/service">Discover More</Link> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 2 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={two}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={three}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={five} alt="Contabilidad" style={{width: "448px", height: "513px", objectFit: "cover"}} />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <h2>03.</h2>
                        <p>
                        Gestión financiera moderna y precisa mediante herramientas digitales, facilitando la administración y el cumplimiento normativo.
                        </p>
                        {/* <Link href="/service">Discover More</Link> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 3 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={two}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={three}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={six} alt="Legales" style={{width: "448px", height: "513px", objectFit: "cover"}} />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <h2>04.</h2>
                        <p>
                        Soporte legal y fiscal integral para la documentación y regularización de propiedades, asegurando el cumplimiento normativo y la tranquilidad de los propietarios.
                        </p>
                        {/* <Link href="/service">Discover More</Link> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${
                    imgTab === 4 ? " show active fade-inc" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="single-service-inner-2">
                    <Image
                      className="top_image_bounce animate-img-1"
                      src={two}
                      alt="img"
                    />
                    <Image
                      className="top_image_bounce animate-img-2"
                      src={three}
                      alt="img"
                    />
                    <div className="thumb">
                      <Image src={seven} alt="Limpieza" style={{width: "448px", height: "513px", objectFit: "cover"}} />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <h2>05.</h2>
                        <p>
                        Servicio profesional de limpieza y mantenimiento para áreas compartidas, promoviendo un ambiente higiénico y agradable para todos los residentes.
                        </p>
                        {/* <Link href="/service">Discover More</Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-2 align-self-center">
              <div className="section-title style-white mb-0 mt-4 mt-lg-0">
                <h6 className="sub-title">// NUESTROS SERVICIOS</h6>
                <h2 className="title">Gestión Efectiva para tu Condominio</h2>
              </div>
              <ul
                className="service-tab-inner nav nav-tabs mt-lg-5 mt-4"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={(imgTab == 0 ? " active" : " ") + " nav-link"}
                    onClick={() => setImgTab(0)}
                  >
                    Mantenimiento de equipos
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={(imgTab == 1 ? " active" : " ") + " nav-link"}
                    onClick={() => setImgTab(1)}
                  >
                    Jardinería y Fumigación
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={(imgTab == 2 ? " active" : " ") + " nav-link"}
                    onClick={() => setImgTab(2)}
                  >
                    Contabilidad electrónica
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={(imgTab == 3 ? " active" : " ") + " nav-link"}
                    onClick={() => setImgTab(3)}
                  >
                    Asesoría legal y regularización de documentos y fiscal
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={(imgTab == 4 ? " active" : " ") + " nav-link"}
                    onClick={() => setImgTab(4)}
                  >
                    Limpieza áreas comunes
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="btn-wrap bg-sky text-center">
        <Link
          className="btn btn-base border-radius mt--30 left_image_bounce"
          href="/"
        >
          Ver todos los servicios
        </Link>
      </div> */}
    </>
  );
};

export default ServiceTwo;
