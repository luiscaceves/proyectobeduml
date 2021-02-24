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

function agregarImagen(evt){
    var files = evt.target.files; // lista de archivos

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Para solo continuar si son archivos de imagen
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // carga la imagen
      reader.onload = (function(theFile) {
        return function(e) {
          // Hace la vista previa
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }




function formatipo(){
    let tipo = document.querySelector('.custom-select').value;
    switch(tipo) {
        case 'Card':
            generainputs(regcard);
            break;

        case 'Jersey':
            generainputs(regjersey);
            break;

        case 'Coin':
            generainputs(regcoin);
            break;

        case 'Perfume':
            generainputs(regperfume);
            break;

        default:
            alert('Elige una categoria.')
            break;
    }
}


document.getElementById("files").addEventListener('change', agregarImagen, false);

function guardarArt(){
  alert('Articulo Guardado.')
}