import {object,string} from 'yup'

 const loginSchema = object({
   password:string()
   .required("Ingresa tu contraseña ")
   .min(8,"Minimo 8 caracteres")
   .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"Debe contener may,min y numero"),
    email:string()
    .required("El campo email es obligatorio")
    .email("Verifica tu email"),


    
})

export default loginSchema