import React, { useState } from "react";
import IconBackground from "../../components/background/IconBackground";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Credencial } from "../../components/credencial";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";




import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import fontkit from "@pdf-lib/fontkit";

import frontCredentialBackground from "../../assets/images/credencialFront.jpg";
import backCredentialBackground from "../../assets/images/credencialBackNew.jpg";
import tagVehicularBackBackground from "../../assets/images/tagVehicularBack.jpg";

import myFont from "../../assets/fonts/Madani-Arabic-Bold.ttf";

import QRCode from "qrcode";
import CryptoJS from "crypto-js";





export const Credenciales = () => {
  const MM_TO_PT = 2.83465; // Factor de conversión de milímetros a puntos
  const [validated, setValidated] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height:'auto',


    boxShadow: 24,
    p: 0,
  };

  const [formData, setFormData] = useState({
    image: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    nss: "",
    noEmpleado: "",
    tipoSangre: "",
    contactoEmergencia: "",
    telefonoEmergencia: "",
  });




  const calculateCenteredX = (
    pageWidth,
    text,
    font,
    fontSize
  ) => {
    const textWidth = font.widthOfTextAtSize(text, fontSize); // Ancho del texto
    return (pageWidth - textWidth) / 2; // Calcular el punto inicial para centrar
  };


  const generateCredentialPDF = async ({
    image,
    nombre,
    position,
    unidadAcademica,
    apellidoPaterno,
    apellidoMaterno,
    nss,
    noEmpleado,
    tipoSangre,
    contactoEmergencia,
    telefonoEmergencia
  }) => {

    console.log(position)
    // Configuración de tamaño del PDF (54mm x 85mm en puntos)
    const width = 54 * MM_TO_PT;
    const height = 85 * MM_TO_PT;

    //colores
    const navyBlue = rgb(0.2039216, 0.0901961, 0.6117647);
    const green = rgb(0.3294118, 0.7882353, 0.5607843);

    // Crea un nuevo documento PDF
    const pdfDoc = await PDFDocument.create();

    // ** Página 1: Frente de la credencial **
    const frontPage = pdfDoc.addPage([width, height]);

    // Fondo del frente de la credencial
    const frontBackgroundImageBytes = await fetch(
      frontCredentialBackground
    ).then((res) => res.arrayBuffer());
    const frontBackgroundImage = await pdfDoc.embedJpg(
      frontBackgroundImageBytes
    );

    frontPage.drawImage(frontBackgroundImage, {
      x: 0,
      y: 0,
      width,
      height,
    });
    console.log(nombre);
    // Foto del empleado en el frente
    const photoBytes = await fetch(URL.createObjectURL(image)).then((res) =>
      res.arrayBuffer()
    );
    const photo = await pdfDoc.embedJpg(photoBytes);

    frontPage.drawImage(photo, {
      x: 53, // Ajusta las posiciones
      y: height - 120,
      width: 55,
      height: 60,
    });

    pdfDoc.registerFontkit(fontkit);

    // Carga tu fuente personalizada
    const fontBytes = await fetch(myFont).then((res) => res.arrayBuffer());
    const customFont = await pdfDoc.embedFont(fontBytes);

    const text = "Texto centrado";
    const fontSize = 24;

    const nameFontSize = 6;
    const nameX = calculateCenteredX(
      width,
      nombre.toUpperCase(),
      customFont,
      nameFontSize
    );

    // Nombre del empleado en el frente
    frontPage.drawText(nombre.toUpperCase(), {
      x: nameX,
      y: height - 130,
      size: nameFontSize,
      color: navyBlue,
      font: customFont,
    });

    const positionFontSize = 6;
    const positionX = calculateCenteredX(
      width,
      position,
      customFont,
      positionFontSize
    );
    // Nombre del empleado en el frente
    frontPage.drawText(position.toUpperCase(), {
      x: positionX,
      y: height - 140,
      size: positionFontSize,
      color: green,
      font: customFont,
    });

    const numeroNominaX = width / 8;

    frontPage.drawText("Número de nomina: ", {
      x: numeroNominaX,
      y: height - 165,
      size: 5,
      color: navyBlue,
      font: customFont,
    });

    frontPage.drawText(noEmpleado, {
      x: width / 2,
      y: height - 165,
      size: 5,
      color: navyBlue,
      font: customFont,
    });

    // frontPage.drawText(data.employeeId, {
    //   x: (width / 2) + 4,
    //   y: height - 165,
    //   size: 6,
    //   color: navyBlue,
    //   font:customFont
    // });

    frontPage.drawText("Tipo de sangre: " + tipoSangre, {
      x: width / 8,
      y: height - 175,
      size: 5,
      color: navyBlue,
      font: customFont,
    });

    frontPage.drawText("NSS: " + nss, {
      x: width / 2,
      y: height - 175,
      size: 5,
      color: navyBlue,
      font: customFont,
    });

    // ** Página 2: Reverso de la credencial **
    const backPage = pdfDoc.addPage([width, height]);

    // Fondo del reverso de la credencial
    const backBackgroundImageBytes = await fetch(backCredentialBackground).then(
      (res) => res.arrayBuffer()
    );
    const backBackgroundImage = await pdfDoc.embedJpg(backBackgroundImageBytes);
    backPage.drawImage(backBackgroundImage, {
      x: 0,
      y: 0,
      width,
      height,
    });

    // const backBackgroundImageBytes = await fetch(tagVehicularBackBackground).then(res => res.arrayBuffer());
    // const backBackgroundImage = await pdfDoc.embedJpg(backBackgroundImageBytes);
    // backPage.drawImage(backBackgroundImage, {
    //   x: 0,
    //   y: 0,
    //   width,
    //   height,
    // });

    const unidadAcademicaFontSize = 7;
    const unidadAcademicaX = calculateCenteredX(
      width,
      `UNIDAD ACADÉMICA ${unidadAcademica.toUpperCase()}`,
      customFont,
      unidadAcademicaFontSize
    );

    // // Nombre del empleado en el frente
    backPage.drawText(
      `UNIDAD ACADÉMICA ${unidadAcademica.toUpperCase()}`,
      {
        x: unidadAcademicaX,
        y: height - 30,
        size: unidadAcademicaFontSize,
        color: green,
        font: customFont,
      }
    );

    const encryptedEmployeeId = CryptoJS.MD5(noEmpleado).toString();

    // Generar código QR
    const qrUrl = `https://app.tecmm.mx/validarCredencial/${encryptedEmployeeId}`;
    const qrCodeDataUrl = await QRCode.toDataURL(qrUrl, { width: 100 });

    // Convertir el QR a bytes para integrarlo al PDF
    const qrCodeImageBytes = await fetch(qrCodeDataUrl).then((res) =>
      res.arrayBuffer()
    );
    const qrCodeImage = await pdfDoc.embedPng(qrCodeImageBytes);

    backPage.drawImage(qrCodeImage, {
      x: 50, // Ajusta las posiciones
      y: height - 80,
      width: 50,
      height: 50,
    });

    const contactoEmergenciaFontSize = 6;
    const contactoEmergenciaX = calculateCenteredX(
      width,
      `CONTACTO DE EMERGENCIA`,
      customFont,
      contactoEmergenciaFontSize
    );

    // Nombre del empleado en el frente
    backPage.drawText(`CONTACTO DE EMERGENCIA`, {
      x: contactoEmergenciaX,
      y: height - 85,
      size: contactoEmergenciaFontSize,
      color: navyBlue,
      font: customFont,
    });

    const numeroEmergenciaFontSize = 6;
    const numeroEmergenciaX = calculateCenteredX(
      width,
      telefonoEmergencia,
      customFont,
      numeroEmergenciaFontSize
    );

    // Nombre del empleado en el frente
    backPage.drawText(telefonoEmergencia, {
      x: numeroEmergenciaX,
      y: height - 95,
      size: numeroEmergenciaFontSize,
      color: navyBlue,
      font: customFont,
    });

    // Guarda el PDF y descarga el archivo
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, `credencial_${nombre}.pdf`);
  };

















  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0], // Guardamos el archivo (no el string)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };












  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if(isFormComplete){
      setOpen(true)
    }
    setValidated(true);
    event.preventDefault(); // evita el reload
    console.log("Datos del formulario:", formData);
  };








 const isFormComplete = Object.values(formData).every((value) => {
    if (typeof value === "string") {
      return value.trim() !== "";
    } else if (value instanceof File) {
      return value.size > 0; // el archivo existe y tiene contenido
    }
    return false;
  });











  return (
    <div>
      <IconBackground />
      <br />
      <br />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <div className="noticia-container">
          <h1 className="h1-archivo">Vista previa</h1>
          <div>
            <Credencial
              photoUrl={formData.image ? URL.createObjectURL(formData.image):'hola'}
              cara="front"
              nombre={`${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`}
              rol="ADMINISTRATIVO"
              noSeguro={formData.nss}
              tipoSangre={formData.tipoSangre}
              vigencia={"2024 - 2026"}
              telefonoEmergencia={formData.telefonoEmergencia}
              unidadAcademica={"DIRECCIÓN GENERAL"}
              noEmpleado={formData.noEmpleado}

            />
          </div>
        </div>

        </Box>
      </Modal>

      <div className="noticia-container">
        <h1 className="h1-archivo">Generar Credencial</h1>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 pt-3">
            <Form.Group as={Col} md="12" controlId="formFile">
              <Form.Label>Fotografia</Form.Label>
              <Form.Control
                required
                type="file"
                name="image"
                // value={formData.image}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 pt-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
                required
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                required
                type="text"
                name="apellidoPaterno"
                value={formData.apellidoPaterno}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                required
                type="text"
                name="apellidoMaterno"
                value={formData.apellidoMaterno}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 pt-3">
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>No. Seguro social</Form.Label>
              <Form.Control
                required
                type="text"
                name="nss"
                value={formData.nss}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>No. Empleado</Form.Label>
              <Form.Control
                required
                type="text"
                name="noEmpleado"
                value={formData.noEmpleado}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Label>Tipo de sangre</Form.Label>
              <Form.Control
                required
                type="text"
                name="tipoSangre"
                value={formData.tipoSangre}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 pt-3">
            <Form.Group as={Col} md="6" controlId="validationCustom07">
              <Form.Label>Contacto en caso de emergencia</Form.Label>
              <Form.Control
                required
                type="text"
                name="contactoEmergencia"
                value={formData.contactoEmergencia}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom08">
              <Form.Label>Teléfono de emergencias</Form.Label>
              <Form.Control
                required
                type="text"
                name="telefonoEmergencia"
                value={formData.telefonoEmergencia}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 pt-3">
            <Form.Group as={Col} md="4">
              <Button type="submit">Generar vista previa</Button>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Button 
                onClick={() =>
                  generateCredentialPDF({

                    image:formData.image,
                    nombre:`${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`,
                    position:'ADMINISTRATIVO',
                    unidadAcademica:'Direccion General',
                    apellidoPaterno: formData.apellidoPaterno,
                    apellidoMaterno: formData.apellidoMaterno,
                    nss: formData.nss,
                    noEmpleado: formData.noEmpleado,
                    tipoSangre: formData.tipoSangre,
                    contactoEmergencia: formData.contactoEmergencia,
                    telefonoEmergencia: formData.telefonoEmergencia

                  })
                }
              
              >Imprimir Credencial</Button>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Button type="reset">Limpiar</Button>
            </Form.Group>
          </Row>
        </Form>
      </div>

      <br />

      {/* {isFormComplete && (
        <div className="noticia-container">
          <h1 className="h1-archivo">Vista previa</h1>
          <Button type="submit">Imprimir credencial</Button>
          <div>
            <Credencial
              photoUrl={
                "https://tsjapp.tecmm.mx/api/credentialPhoto/119_ACC0220_Maria_Fernanda_Coria.jpg"
              }
              cara="front"
              nombre={`${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`}
              rol="ADMINISTRATIVO"
              noSeguro={formData.nss}
              tipoSangre={formData.tipoSangre}
              vigencia={"2024 - 2026"}
              telefonoEmergencia={formData.telefonoEmergencia}
              unidadAcademica={"DIRECCIÓN GENERAL"}
              noEmpleado={formData.noEmpleado}
            />
          </div>
        </div>
      )} */}
    </div>
  );
};
