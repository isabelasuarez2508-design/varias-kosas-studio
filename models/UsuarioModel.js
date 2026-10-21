const usuarios = [
    {
        nombre: "Isabela Suarez",
        telefono: "312456755",
        correo: "isabela@gmail.com",
        contrasena: "123456789",
        id: "id12345" 
    },
    {
        nombre: "Ana Saldarriaga",
        telefono: "345697423",
        correo: "anita123@gmail.com",
        contrasena: "1234567891011",
        id: "id123456789"
    }
];

export function guardarUsuario(){

}

export function buscarUsuario(correo, contrasena){
   let auth = usuarios.some((usuario)=> correo == usuario.correo && contrasena == usuario.contrasena)
   return auth
}