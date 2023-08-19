//Obtener elementos con id tabla y id contenido

let tabla = document.getElementById('tabla');
let contenido = document.getElementById('contenido');
let carta = document.getElementById('carta');

//Consummo de api con FETCH

fetch('https://digimon-api.vercel.app/api/digimon')
.then(respuesta => respuesta.json())
.then(datos =>{
    mostrartabla(datos);
}).catch(error => console.log(error))


function mostrartabla(datos){
    contenido.innerHTML=''; //limpia contenido

    for(let temp of datos){

        contenido.innerHTML += 
        `<td>${temp.name}</td>
        <td><img src="${temp.img}" alt="Ilustración de ${temp.name}" width="70px" height="70px"></td>
        <td>${temp.level}</td>
        `
    }
}

function mostrarCarta(){
    let busqueda = document.getElementById("busqueda").value.toLowerCase();
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${busqueda}`)	
        .then(respuesta => respuesta.json())
        .then(datos =>{
            console.log(datos);
            armarCarta(datos);
        }).catch(error => console.log(error))
    }
function armarCarta(buscado){
    document.getElementById('tabla').style.display = 'none';
    document.getElementById('contenido').style.display = 'none';

    tabla.innerHTML = '';
    contenido.innerHTML = '';
    carta.innerHTML = '';

    for(let temp of buscado){
        carta.innerHTML +=
        `
        <div class="card text-bg-dark h-100 mx-auto  border-light bg-gradient">
            <img src="${temp.img}" class="card-img-top" alt="Ilustración de ${temp.name}">
            <div class="card-body">
                <h5 class="card-title">${temp.name}</h5>
                <p class="card-text">Nivel: ${temp.level}</p>
            </div>
        </div>
        `
    }
}
