let btn = document.getElementById("button")
let nombre = document.getElementById("nombre")
let genero = document.getElementById("genero")
let altura = document.getElementById("altura")
let peso = document.getElementById("masa")
let pelo = document.getElementById("colorPelo")
let piel = document.getElementById("colorPiel")
let ojos = document.getElementById("colorOjos")
let cumple = document.getElementById("bday")


function getInfo(){
    // hacemos que eliga un personaje aleatorio entre los 100
    let aleatorio = Math.floor((Math.random() *88) + 1)
    let apiUrl = `https://swapi.dev/api/people/${aleatorio}`

    axios.get(apiUrl).then(response =>{
        actualizarInfo(response.data);
    }).catch(e =>{
        actualizarInfoError()
    })

}

function actualizarInfo(data){
    nombre.innerText = data.name
    genero.innerText = `Genero: ${data.gender}`
    altura.innerText = `Altura: ${data.height}`
    peso.innerText = `Peso: ${data.mass}`
    pelo.innerText = `Color de pelo: ${data.hair_color}`
    piel.innerText = `Color de piel: ${data.skin_color}`
    ojos.innerText = `Color de ojos: ${data.eye_color}`
    cumple.innerText = `Dia de cumpleaños ${data.birth_year}`
}

// funciona para cuando tira error despues de haber apretado el boton una cierta ctdad de veces
// en consola nunca deberia aparecer un error
function actualizarInfoError(){
    nombre.innerText = `Este personaje no esta disponible por el momento`
    genero.innerText = ``
    altura.innerText = ``
    peso.innerText = ``
    pelo.innerText = ``
    piel.innerText = ``
    ojos.innerText = ``
    cumple.innerText = ``
}


btn.addEventListener(`click`, getInfo)