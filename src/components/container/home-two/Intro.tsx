import React from "react";

import one from "public/images/icon/1.png";
import two from "public/images/icon/2.png";
import three from "public/images/icon/3.png";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="intro-area bg-sky pd-top-120 pd-bottom-90" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3">
              <div className="thumb mb-4">
                <Image src={one} alt="img" />
              </div>
              <div className="details">
                <h4>Mantenimiento Integral para su inmueble</h4>
                <p>
                Nuestro servicio de mantenimiento integral garantiza que su inmueble esté siempre en óptimas condiciones. Desde labores preventivas hasta reparaciones urgentes, nuestro equipo se encarga de todo para asegurar la seguridad y comodidad de los residentes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner border-right-1 ps-lg-3 pe-lg-3">
              <div className="thumb mb-4">
                <Image src={two} alt="img" />
              </div>
              <div className="details">
                <h4>Gestión Financiera Transparente</h4>
                <p>
                Con nuestra gestión financiera transparente, usted tendrá un control total sobre los recursos de su inmueble. Desde la cobranza de cuotas hasta la presentación detallada de informes, le proporcionamos la información necesaria para tomar decisiones informadas y eficientes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="intro-area-inner ps-lg-3">
              <div className="thumb mb-4">
                <Image src={three} alt="img" />
              </div>
              <div className="details">
                <h4>Asesoría Legal Especializada</h4>
                <p>
                Nuestra asesoría legal especializada le brinda la tranquilidad de estar siempre respaldado por profesionales. Ya sea en asuntos de propiedad, convivencia o cualquier otro tema legal relacionado con su inmueble, estamos aquí para ofrecerle la orientación y el apoyo que necesita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
