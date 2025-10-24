import React from 'react';
import { useAuth } from '../../context/authContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requiredPermission }) => {
  const { isAuthenticated, permissions, loading } = useAuth();
    console.log('Permisos: ', permissions)
  // ⏳ Mientras se carga el token (primeros milisegundos)
  if (loading) {
    return <div>Cargando sesión...</div>;
  } 

  // 🚫 Si no está autenticado → login
  if (!isAuthenticated) {
    console.log('Usuario no autenticado → redirigiendo al login');
    return <Navigate to="/login" replace />;
  }

  // ✅ Si está autenticado y tiene permiso → entra
  if (permissions?.includes(requiredPermission)) {
    return children;
  }

  // 🔒 Si no tiene permiso → sin autorización
  return <Navigate to="/unauthorized" replace />;
};

export default PrivateRoute;



//obtener la suma de todas las compras
//cliente que mas gasto
//nuevo objeto agrupado por los paises y que tenga un array con los nombres pertenecientes a ese pais 


// const CUSTOMERS = [
//   { id: 1, name: "Alice", country: "USA", purchases: [100, 200, 50] },
//   { id: 2, name: "Bob", country: "Mexico", purchases: [300] },
//   { id: 3, name: "Charlie", country: "USA", purchases: [] },
//   { id: 4, name: "Diana", country: "Canada", purchases: [400, 150] },
//   { id: 5, name: "Justin", country: "Canada", purchases: [100, 0, 30] },
//   { id: 6, name: "Joao", country: "Portugal", purchases: [300, 0, 30] },
// ];
 
// const compras = CUSTOMERS.reduce((acc, client)=>{
//   const suma = client.purchases.reduce((a,b) => a+b, 0)
  
//   return suma+acc
// }, 0)


// const masGasto = CUSTOMERS.reduce((max, client)=>{
//   const total = client.purchases.reduce((a, b) => a + b, 0)
//   return total > max.total ? {name: client.name, total} : max;
// }, {name:"", total:0})

// const countryGroup = CUSTOMERS.reduce((acc, client) =>{
//   if(!acc[client.country]){
//     acc[client.country]=[]
//   }
//   acc[client.country].push(client.name)
//   return acc
// }, {} )

// console.log('paises: ', countryGroup)

// console.log('Quien gasto mas?: ', masGasto)
// console.log(compras)