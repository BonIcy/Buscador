import config from "../storage/config.js"; //vermen.ayala@camouslands.com
import myCards from "./components/myCards.js";


setTimeout(function(){
    config.dataMySelectors();
    Object.assign(this, JSON.parse(localStorage.getItem("mySelectors")));
    config.dataMyCards();
    Object.assign(this, JSON.parse(localStorage.getItem("myCards")))
    function clear(){
        funName.forEach(e=>{
            e.remove
        })
    }
    let funName= document.querySelectorAll(`.card`)
    let genero = document.querySelector(`#genero`);
    let memoriaram = document.querySelector(`#ram`);
    let almacenamiento = document.querySelector(`#almac`);
    let plataformas = document.querySelector(`#plataforma`);
    let valor = document.querySelector(`#precio`);
    let filtrico={
        gene:"",
        ram:"",
        almac:"",
        plataforma:"",
        precio:""
}

genero.addEventListener(`input`, (e)=>{
    filtrico.gene= e.target.value
    filterGame()
    console.log(filtrico);
    clear()
    
});
memoriaram.addEventListener(`input`, (e)=>{
    filtrico.ram= parseFloat(e.target.value)
    filterGame()
    console.log(filtrico);
    clear()
});
almacenamiento.addEventListener(`input`, (e)=>{
    filtrico.almac= parseFloat(e.target.value)
    filterGame()
    console.log(filtrico);
    clear()
});
plataformas.addEventListener(`input`, (e)=>{
    filtrico.plataforma= e.target.value
    filterGame()
    console.log(filtrico);
    clear()
});
valor.addEventListener('input', (e)=>{
    filtrico.precio= parseFloat(e.target.value)
    filterGame()
    console.log(filtrico);
    clear()
});

function filterGame(){
    let result = games
    .filter(filterGenero)
    .filter(filterram)
    .filter(filteralmac)
    .filter(filterplataforma)
    .filter(filterPrecio)
    myCards.show(result);
    clear(result)
    console.log(result);
}
function filterGenero(game){
    if (filtrico.gene){
    return game.gene.includes(filtrico.gene)
    }
    return game 
}
function filterram(game){
    if (filtrico.ram){
        return game.ram >= filtrico.ram
    }
    return game
}
function filteralmac(game){
    if(filtrico.almac === 0 && filtrico.almac <= 0.2){ //puse el === 0 para que me funcionaran el resto de selects sin tener que usar este
        return game.almac <= filtrico.almac
    }
    else if(filtrico.almac > 0.2 && filtrico.almac < 30){
        return game.almac <= 29 && game.almac > 0.2 
    }
    else if(filtrico.almac >= 30){
        return game.almac >= filtrico.almac
    }
    return game
}
function filterplataforma(game){
    if(filtrico.plataforma){
        return game.plataforma.includes(filtrico.plataforma)
    }
    return game
}
function filterPrecio(game){
    if(filtrico.precio === 0){
        return game.precio === filtrico.precio
    }
    else if(filtrico.precio > 0){
        return game.precio >= filtrico.precio
    }
    return game
}
}, 1100)

