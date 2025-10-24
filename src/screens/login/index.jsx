import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import IconBackground from "../../components/background/IconBackground";
import { BasicContainer } from "../../components/basicContainer";
import logoTsjColor from "../../assets/logos/tsjColor.png";
import tsjVerified from "../../assets/logos/tsjVerified.png";
import './index.css'

const Login = () => {
  const { login, logout, isAuthenticated} = useAuth(); // Desestructuramos la función login

  

  const handleGoogleSuccess = async (credentialResponse) => {
    const googleToken = credentialResponse.credential;

    //console.log(credentialResponse)
    try {
      const res = await axios.post("https://tecmm.edu.mx/tsjApi/auth/google", {
        token: googleToken,
      });

      // const { user, token } = res.data;
      // console.log("Usuario autenticado:", res.data);

      if(res.data.accessToken){
        login(res.data.accessToken, res.data.picture)
        // setIsLoggedIn(true)
      }

      // Navigate("/");
    } catch (error) {
      console.log(error)
      if(error.status === 401) alert('Tienes que utilizar un correo @tecmm.edu.mx');
      // console.error("Error al autenticar con Google:", error);
    }
  };

  return (
    <div>
      <IconBackground/>
      
      <BasicContainer>


        <div className="div-loginContainer">

          <div className="div-loginControls">
            

              <>

                <img src={logoTsjColor}/>
                <h1>Iniciar Sesión</h1>

                <p>Necesitas permisos para acceder a esta seccion, por favor inicia sesión con tu correo institucional tecmm.edu.mx</p>

                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => console.log("Error al iniciar sesión con Google")}
                  theme="filled_blue"   // opciones: "outline", "filled_blue", "filled_black"
                  size="large"           // opciones: "small", "medium", "large"
                  shape="pill"           // opciones: "rectangular", "pill", "circle"
                  text="signin_with"   // opciones: "signin_with", "signup_with", "continue_with"
                  logo_alignment="left"  // opciones: "left", "center"
                />
              </>

            {/* {!isAuthenticated?(
              <>

                <img src={logoTsjColor}/>
                <h1>Iniciar Sesión</h1>

                <p>Necesitas permisos para acceder a esta seccion, por favor inicia sesión con tu correo institucional tecmm.edu.mx</p>

                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => console.log("Error al iniciar sesión con Google")}
                  theme="filled_blue"   // opciones: "outline", "filled_blue", "filled_black"
                  size="large"           // opciones: "small", "medium", "large"
                  shape="pill"           // opciones: "rectangular", "pill", "circle"
                  text="signin_with"   // opciones: "signin_with", "signup_with", "continue_with"
                  logo_alignment="left"  // opciones: "left", "center"
                />
              </>

            ) : (
              
              <>
                <img id='img-tsjVerified' src={tsjVerified}/>
                <p>Actualmente ya se encuentra con una sesión activa, puedes cerrar sesión en la esquina superior derecha.</p>

              </>

            )} */}

          </div>

        </div>


      </BasicContainer>

    </div>
  );
};

export default Login;
