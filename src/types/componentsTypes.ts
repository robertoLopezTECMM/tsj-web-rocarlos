export interface CredencialType{
    cara: 'front' | 'back';
    photoUrl: string;
    nombre: string;
    rol: string;
    noControl?: string;
    noEmpleado?: string;
    noSeguro: string;
    tipoSangre: string;
    vigencia: string;
    telefonoEmergencia: string;
    unidadAcademica:string
}

export interface cardPersonCredential {
    name: string,
    role: string,
    photoUrl: string
    numeroEmpleado?: string,
    numeroControl?: string,
    onClick: ()=>void;
}


export interface CardPaseIngresoLoginType {
    user: string,
    password:string,
    setUser: (value:string) => void,
    setPassword: (value:string) => void,
    handleClickLogin: () => void,
}

export interface CardPaseIngresoType {
    area: string,
    campus: string,
    idQr: string,
    imagen: string,
    noEmpleado: string,
    nombre: string,
    puesto: string,
    qr: any,
    tipo: string
}


export interface button {
    text: string,
    color: '#308FFF'|'#54c98f'|'#ffae31'|'#33179c'|'#ff4d63'|'#A7823B'|'#d8d8d8',
    onClick: ()=>void;
}