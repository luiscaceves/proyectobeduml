// Se generá la instancia de Lista para poder tener acceso a la lista de registro
const registrador = new Lista();
let type = document.querySelector('#inputtype').value;
let registro = new type(idart, type, name, grade);
// Se ocupa el metodo agregaRegistro para guardar la instancia generada en la lista de registros
registrador.agregaRegistro(registro);