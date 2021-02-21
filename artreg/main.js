const regcard = ['Sport', 'Team', 'Year', 'Brand', 'Player', 'Card #', 'Grade'];
const regjersey = ['Sport', 'Team', 'Brand', 'Year', 'Number', 'Grade'];
const regperfume = ['Brand', 'Name', 'Variant', 'Notes'];

function generainputs(tipo){
    document.querySelector('.artinput').innerHTML = '';
    const contenedor = document.querySelectorAll('.artinput')[0];
    tipo.forEach( input => {
        const inp = document.createElement('input');
        inp.innerHTML = input;
        inp.placeholder = input;
        inp.className = "autoinputs";
        contenedor.appendChild(inp);

    });
}

function agregarImagen(){
    const urlimagen = document.querySelector('#validatedCustomFiel').value;
    const imagen = document.createElement('img');
    imagen.src = urlimagen;
conten
}

function formatipo(){
    let tipo = Number(document.querySelector('.custom-select').value);
    switch(tipo) {
        case 1:
            generainputs(regcard);
            break;

        case 2:
            generainputs(regjersey);
            break;

        case 3:

            break;

        case 4:
            generainputs(regperfume);
            break;

        default:

            break;
    }
}

function generaBotones() {
    const contenedor = document.querySelectorAll('.botonera')[0];
    alphabet.forEach( letra => {
        const el = document.createElement('button');
        el.innerHTML = letra;
        el.addEventListener('click', () => {
            if (letra === 'Todos') {
                imprimeTodos();
            } else {
                clickBotonesLetras(letra);
            }
        });
        contenedor.appendChild(el);
    });
}