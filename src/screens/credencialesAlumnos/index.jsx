import React, { useState } from "react";
import IconBackground from "../../components/background/IconBackground";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Credencial, CredencialAlumno } from "../../components/credencial";
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
import "./index.css";
import { InputGroup } from "react-bootstrap";
import axios from "axios";

export const CredencialesAlumnos = () => {
  const MM_TO_PT = 2.83465; // Factor de conversión de milímetros a puntos
  const [validated, setValidated] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [disabledForm, setDisabledForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    height: "auto",

    boxShadow: 24,
    p: 0,
  };

  const [formData, setFormData] = useState({
    image: "",
    imageFromEdcore: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    carrera: "",
    noControl: "",
    tipoSangre: "",
    nss: "",
    //noEmpleado: "",
    unidadAcademica: "",
    contactoEmergencia: "",
    telefonoEmergencia: "",
    studentEmail: "",
  });

  const [noControlSearch, setNoControlSearch] = useState("");

  const calculateCenteredX = (pageWidth, text, font, fontSize) => {
    const textWidth = font.widthOfTextAtSize(text, fontSize); // Ancho del texto
    return (pageWidth - textWidth) / 2; // Calcular el punto inicial para centrar
  };

  const generateCredentialPDF = async ({
    image,
    nombre,
    position,
    unidadAcademica,
    carrera,
    apellidoPaterno,
    apellidoMaterno,
    nss,
    noEmpleado,
    tipoSangre,
    contactoEmergencia,
    telefonoEmergencia,
    noControl,
  }) => {
    console.log(position);
    // Configuración de tamaño del PDF (54mm x 85mm en puntos)
    const width = 54 * MM_TO_PT;
    const height = 85 * MM_TO_PT;

    //colores
    const blue = rgb(0.18823529411, 0.56078431372, 1);
    const green = rgb(0.3294117647, 0.78823529411, 0.56078431372);
    const orange = rgb(1, 0.68235294117, 0.19215686274);
    const navyBlue = rgb(0.20392156862, 0.09019607843, 0.61176470588);
    const red = rgb(1, 0.30196078431, 0.38823529411);
    const gold = rgb(0.65490196078, 0.50980392156, 0.23137254901);
    const grey = rgb(0.84705882352, 0.84705882352, 0.84705882352);

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
    console.log("IMAGE: ", image);

    // dataUrl viene de handleImage (base64)
    const dataUrl = formData.imageFromEdcore;

    // Extraer solo la parte base64
    const base64Data = dataUrl.split(",")[1];

    // Convertir a ArrayBuffer
    const photoBytes = Uint8Array.from(atob(base64Data), (c) =>
      c.charCodeAt(0)
    );

    // Embed en pdf-lib
    const photo = await pdfDoc.embedJpg(photoBytes);

    frontPage.drawImage(photo, {
      x: 53,
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

    const positionFontSize = 5;
    const positionX = calculateCenteredX(
      width,
      position,
      customFont,
      positionFontSize
    );
    // Nombre del empleado en el frente
    frontPage.drawText(position.toUpperCase(), {
      x: positionX,
      y: height - 150,
      size: positionFontSize,
      color: orange,
      font: customFont,
    });

    const carreraFontSize = 5;
    const carreraX = calculateCenteredX(
      width,
      carrera,
      customFont,
      carreraFontSize
    );
    // Nombre del empleado en el frente
    frontPage.drawText(carrera.toUpperCase(), {
      x: carreraX,
      y: height - 140,
      size: carreraFontSize,
      color: green,
      font: customFont,
    });

    const numeroNominaX = width / 8;

    frontPage.drawText("Número de control: ", {
      x: numeroNominaX,
      y: height - 165,
      size: 5,
      color: navyBlue,
      font: customFont,
    });

    frontPage.drawText(noControl, {
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
    backPage.drawText(`UNIDAD ACADÉMICA ${unidadAcademica.toUpperCase()}`, {
      x: unidadAcademicaX,
      y: height - 30,
      size: unidadAcademicaFontSize,
      color: green,
      font: customFont,
    });

    const encryptedControlNo = CryptoJS.MD5(noControl).toString();

    // Generar código QR
    const qrUrl = `https://app.tecmm.mx/validarCredencial/${encryptedControlNo}`;
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
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    return pdfBlob;
    // await postID(pdfBlob)
    // saveAs(blob, `credencial_${nombre}.pdf`);
  };

const postID = async (pdfBlob) => {

  if (!pdfBlob) {
    alert("No hay PDF para enviar.");
    return;
  }


  const formDataToSend = new FormData();

  // Campos del DTO
  formDataToSend.append("fullName", `${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`);
  formDataToSend.append("career", formData.carrera);
  formDataToSend.append("unidadAcademica", formData.unidadAcademica);
  formDataToSend.append("nss", formData.nss);
  formDataToSend.append("controlNumber", formData.noControl);
  formDataToSend.append("bloodType", formData.tipoSangre);
  formDataToSend.append("emergencyContactName", formData.contactoEmergencia);
  formDataToSend.append("emergencyContactPhone", formData.telefonoEmergencia);
  formDataToSend.append("studentEmail", formData.studentEmail);
  formDataToSend.append("whoCreated", "usuario loggeado");

  // Agregar el PDF generado
  formDataToSend.append("pdf", pdfBlob, "credencial.pdf");

  try {
    const response = await axios.post(
      "https://tecmm.edu.mx/tsjApi/students-ids",
      formDataToSend,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    console.log(response.data);
    alert(response.data.message);
  } catch (error) {
    console.error("Error al enviar:", error.response?.data || error.message);
    alert("Hubo un error al enviar los datos ❌");
  }
};

const handleGenerateAndSend = async () => {
  try {
    const pdfBlob = await                         
    generateCredentialPDF({
                          image: formData.image,
                          nombre: `${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`,
                          position: "ESTUDIANTE",
                          carrera: formData.carrera,
                          unidadAcademica: formData.unidadAcademica,
                          apellidoPaterno: formData.apellidoPaterno,
                          apellidoMaterno: formData.apellidoMaterno,
                          nss: formData.nss,
                          noEmpleado: formData.noEmpleado,
                          noControl: formData.noControl,
                          tipoSangre: formData.tipoSangre,
                          contactoEmergencia: formData.contactoEmergencia,
                          telefonoEmergencia: formData.telefonoEmergencia,
                        })
    await postID(pdfBlob); // 2️⃣ enviar PDF
  } catch (err) {
    console.error("Error generando o enviando la credencial:", err);
  }
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
      console.log("por esto no abre el modal");
    }

    if (isFormComplete) {
      setOpen(true);
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

  const searchStudent = async () => {
    if (!noControlSearch)
      return alert("debes ingresar un numero de control valido");
    try {
      setLoading(true);
      const studentInfo = await axios.get(
        `https://www.tecmm.edu.mx/tsjApi/students-ids/${noControlSearch}`
      );
      console.log(studentInfo);

      if (studentInfo.data === undefined) {
        setDisabledForm(true);
        return alert(
          "no se encontro al alumno con el numero de control: " +
            noControlSearch
        );
      }

      setFormData({
        ...formData,
        image: studentInfo.data.photo,
        imageFromEdcore: studentInfo.data.photo,
        nombre: studentInfo.data.name,
        apellidoPaterno: studentInfo.data.firstName,
        apellidoMaterno: studentInfo.data.secondName,
        carrera: studentInfo.data.programName,
        nss: studentInfo.data.numeroSeguro,
        noControl: studentInfo.data.code,
        unidadAcademica: studentInfo.data.campusName,
        //noEmpleado:studentInfo.data[0].code,
        tipoSangre:
          studentInfo.data.blobFactor === "NC"
            ? ""
            : studentInfo.data.blobFactor,
      });

      console.log("student: ", studentInfo.data);
      setDisabledForm(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const targetWidth = 300;
        const targetHeight = 352;
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        // Proporción original de la imagen
        const aspectRatio = img.width / img.height;
        const targetRatio = targetWidth / targetHeight;

        let drawWidth = targetWidth;
        let drawHeight = targetHeight;
        let offsetX = 0;
        let offsetY = 0;

        if (aspectRatio > targetRatio) {
          // Imagen más ancha → recortar horizontalmente
          drawHeight = targetHeight;
          drawWidth = img.width * (targetHeight / img.height);
          offsetX = (targetWidth - drawWidth) / 2;
        } else {
          // Imagen más alta → recortar verticalmente
          drawWidth = targetWidth;
          drawHeight = img.height * (targetWidth / img.width);
          offsetY = (targetHeight - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
        setFormData({ ...formData, imageFromEdcore: dataUrl, image: dataUrl }); // preview listo
      };
      img.src = e.target?.result;
    };
    reader.readAsDataURL(file);
  };


  // const postID = async () => {

  //   const dataID = {
  //     fullName: `${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`,
  //     career: formData.carrera,
  //     unidadAcademica: formData.unidadAcademica,
  //     nss: formData.nss,
  //     controlNumber: formData.noControl,
  //     bloodType: formData.tipoSangre,
  //     emergencyContactName: formData.contactoEmergencia,
  //     emergencyContactPhone: formData.telefonoEmergencia,
  //     studentEmail: formData.studentEmail,
  //     whoCreated: 'usuario loggeado'

  //   }


  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3001/tsjApi/students-ids",
  //       dataID,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log(response);
  //     alert("Estudiante creado y correo enviado ✅");
  //   } catch (error) {
  //     console.error("Error al enviar:", error.response?.data || error.message);
  //     alert("Hubo un error al enviar los datos ❌");
  //   }
  // }

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
              <CredencialAlumno
                photoUrl={formData.image}
                cara="front"
                nombre={`${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`}
                carrera={formData.carrera}
                rol="ESTUDIANTE"
                noSeguro={formData.nss}
                tipoSangre={formData.tipoSangre}
                vigencia={"2024 - 2026"}
                telefonoEmergencia={formData.telefonoEmergencia}
                unidadAcademica={formData.unidadAcademica}
                noControl={formData.noControl}
              />
            </div>

            <Row className="mb-3 pt-3">
              <Form.Group as={Col} md="2">
                <Button
                  onClick={handleGenerateAndSend}
                >
                  Enviar
                </Button>
              </Form.Group>

              <Form.Group as={Col} md="2">
                <Button>
                  cancelar
                </Button>
              </Form.Group>
            </Row>
          </div>
        </Box>
      </Modal>

      <div className="noticia-container">
        <h1 className="h1-archivo">Generar Credencial de Alumno</h1>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Ingresa un numero de control"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={noControlSearch}
            onChange={(e) => setNoControlSearch(e.target.value)}
          />
          <Button type="submit" onClick={searchStudent} disabled={loading}>
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Buscando...
              </>
            ) : (
              "Buscar"
            )}
          </Button>
        </InputGroup>

        <fieldset
          disabled={disabledForm}
          className={disabledForm ? "form-disabled" : ""}
        >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 pt-3">
              <Form.Group as={Col} md="3">
                {formData.imageFromEdcore ? (
                  <img
                    src={formData.imageFromEdcore}
                    alt="Foto del alumno"
                    //       style={{
                    //   width: "300px",
                    //   height: "352px",
                    //   objectFit: "cover",   // recorta la imagen manteniendo proporciones
                    //   borderRadius: "8px",
                    //   border: "2px dashed #ccc"
                    // }}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      objectFit: "cover",
                      border: "2px solid #ddd",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      border: "2px dashed #6c757d",
                      borderRadius: "8px",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                      color: "#6c757d",
                      backgroundColor: "#f8f9fa",
                      transition: "all 0.3s ease",
                      height: "252px",
                      width: "auto",
                    }}
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                  >
                    <p style={{ margin: 0 }}>
                      📷 Haz clic o arrastra una imagen
                    </p>
                    <Form.Control
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImage}
                      required
                    />
                  </div>
                )}

                {/* hidden input para la validación */}
                <Form.Control
                  type="text"
                  value={formData.imageFromEdcore || ""}
                  onChange={() => {}} // necesario para que React no se queje
                  required
                  style={{ display: "none" }}
                />
                <Form.Control.Feedback type="invalid">
                  La foto del alumno es obligatoria
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="9" controlId="validationCustom01">
                <Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Nombre(s)</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="nombre"
                      disabled
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Apellido Paterno</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="apellidoPaterno"
                      disabled
                      value={formData.apellidoPaterno}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Apellido Materno</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="apellidoMaterno"
                      disabled
                      value={formData.apellidoMaterno}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3 pt-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Unidad Academica</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="unidadAcademica"
                      disabled
                      value={formData.unidadAcademica}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>No. Control</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="noControl"
                      disabled
                      value={formData.noControl}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3 pt-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom04">
                    <Form.Label>Carrera</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="carrera"
                      disabled
                      value={formData.carrera}
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
                      disabled={formData.nss.length >= 15 ? true : false}
                      value={formData.nss}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom06">
                    <Form.Label>Tipo de sangre</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="tipoSangre"
                      disabled={formData.tipoSangre.length >= 3 ? true : false}
                      value={formData.tipoSangre}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3 pt-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom07">
                    <Form.Label>Contacto de emergencia</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="contactoEmergencia"
                      placeholder="Nombre"
                      value={formData.contactoEmergencia}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom08">
                    <Form.Label> &nbsp;</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="telefonoEmergencia"
                      placeholder="Telefono"
                      value={formData.telefonoEmergencia}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3 pt-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom07">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="studentEmail"
                      placeholder="correo electronico"
                      value={formData.studentEmail}
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
                          image: formData.image,
                          nombre: `${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`,
                          position: "ESTUDIANTE",
                          carrera: formData.carrera,
                          unidadAcademica: formData.unidadAcademica,
                          apellidoPaterno: formData.apellidoPaterno,
                          apellidoMaterno: formData.apellidoMaterno,
                          nss: formData.nss,
                          noEmpleado: formData.noEmpleado,
                          noControl: formData.noControl,
                          tipoSangre: formData.tipoSangre,
                          contactoEmergencia: formData.contactoEmergencia,
                          telefonoEmergencia: formData.telefonoEmergencia,
                        })
                      }
                    >
                      Generar Credencial
                    </Button>
                  </Form.Group>

                  <Form.Group as={Col} md="4">
                    <Button type="reset">Limpiar Campos</Button>
                  </Form.Group>
                </Row>
              </Form.Group>
            </Row>

          </Form>
        </fieldset>
      </div>

      <br />
    </div>
  );
};
