import React from "react";

import "./index.css";

import { CredencialType } from "../../types/componentsTypes";
import qrTemplate from "../../assets/images/qrTemplate.png";

export const Credencial = ({
  photoUrl,
  cara,
  nombre,
  rol,
  noControl,
  noEmpleado,
  noSeguro,
  tipoSangre,
  vigencia,
  telefonoEmergencia,
  unidadAcademica,
}: CredencialType) => {
  return (
    <div className="component-credencialContainerViews">
      <div className="component-credencialContainerFront">
        <div className="component-credencialContainerDatos">
          <div className="component-credencialPhotoContainer">
            <img src={photoUrl} />
          </div>

          <p className="component-credencialName">{nombre}</p>
          <p className="component-credencialPosicion">{rol}</p>

          <div className="component-credencialOtherData">

            <p className="component-credencialSmallData">
              Número de nomina: {noEmpleado}
            </p>

            

            <div className="component-credencialSmallDataRow">
                <p className="component-credencialSmallData">NSS: {noSeguro}</p>
                <p className="component-credencialSmallData"> Tipo de sangre: {tipoSangre} </p>
            </div>
          </div>
        </div>
      </div>

      <div className="component-credencialContainerBack">
        <div className="component-credencialContainerDatosBack">
          <p className="component-credencialUnidadAcademica">
            UNIDAD ACADÉMICA {unidadAcademica}
          </p>

          <div className="component-credencialQrContainer">
            <img className="component-credencialPhoto" src={qrTemplate} />
          </div>

          <p className="component-credencialPhone">CONTACTO DE EMERGENCIA</p>
          <p className="component-credencialPhone">{telefonoEmergencia}</p>
        </div>
      </div>
    </div>
  );
};
