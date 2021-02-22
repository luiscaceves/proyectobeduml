const regcard = ['Sport', 'Team', 'Year', 'Brand', 'Player', 'Card #', 'Grade'];
const regjersey = ['Sport', 'Team', 'Brand', 'Year', 'Number', 'Grade'];
const regperfume = ['Brand', 'Name', 'Variant', 'Notes'];
const regcoin = ['Country', 'Year', 'Denomination'];

function generainputs(tipo){
    document.querySelector('.artinput').innerHTML = '';
    const contenedor = document.querySelectorAll('.artinput')[0];
    tipo.forEach( input => {
        const inptext = document.createElement('h3');
        const inp = document.createElement('input');
        inp.innerHTML = input;
        inp.placeholder = input;
        inp.className = "autoinputs";
        inptext.innerHTML = `${input}: `;
        contenedor.appendChild(inptext);
        contenedor.appendChild(inp);
        
    });
}

function agregarImagen(){
    const urlimagen = document.querySelector('#validatedCustomFiel').value;
    const imagen = document.createElement('img');
    imagen.src = urlimagen;
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
            generainputs(regcoin);
            break;

        case 4:
            generainputs(regperfume);
            break;

        default:
            alert('Elige una categoria.')
            break;
    }
}

