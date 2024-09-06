import {object,ref,string} from 'yup'

 const registerSchema = object({
   confirmPassword:string()
   .required("el requerido")
   .oneOf([ref("password"),null],"Las contraseñas deben coincidir"),
   password:string()
   .required("Ingresa una contraseña")
   .min(8,"Minimo 8 caracteres")
   .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"Debe contener may,min y numero"),
    email:string()
    .required("El email es obligatorio")
    .email("El email ingresado ya existe"),



})

export default registerSchema