import React from "react";
import { BasicContainer } from "../../components/basicContainer";
import Lottie from "lottie-react";
import enConstruccion from '../../assets/lotties/enConstruccion.json'
import IconBackground from "../../components/background/IconBackground";


export const EnConstruccion = () => {
  return (
    <>
    <IconBackground/>
    <BasicContainer>
        <div style={{width:'100%', height:'100%', backgroundColor:'white', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Lottie style={{width:'50%'}} animationData={enConstruccion} loop={true} autoplay={true} />
            <h1 style={{color:'var(--navyBlue)', fontFamily: 'madaniArabicBold'}}>Pagina en construcción</h1>
        </div>
    </BasicContainer>
    </>

  );
};
