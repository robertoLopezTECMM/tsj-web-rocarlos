import React, { useState } from "react";
import IconBackground from "../../components/background/IconBackground";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Credencial } from "../../components/credencial";

export const Credenciales = () => {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    nss: "",
    noEmpleado: "",
    tipoSangre: "",
    contactoEmergencia: "",
    telefonoEmergencia: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault(); // evita el reload
    console.log("Datos del formulario:", formData);
  };

  const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");


  return (
    <div>
      <IconBackground children={undefined} />
      <br />
      <br />

      <div className="noticia-container">
        <h1 className="h1-archivo">Generar Credencial</h1>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
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

          <Row className="mb-3">
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

          <Row className="mb-3">
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

          <Button type="submit">Generar vista previa</Button>
          
          

        </Form>
      </div>

      <br />

      {isFormComplete && (
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
      )}


    </div>
  );
};
