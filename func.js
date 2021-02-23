function busqueda (){
    buscar = document.querySelector('#busquedageneral').value;
    console.log(`estoy buscando ${buscar}`);

}

function login(){
    const user = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if(user == 'guest' && password == 'guest'){
        window.open('./profile.html')
    }
    else {
        alert('Usuario o Password incorrecto.')
    }
}