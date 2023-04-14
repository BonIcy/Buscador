let wsMyCards = {
    listCards(p1){
        let plantilla=  p1.map((game)=>{ //se pone cualquier valor dentro del map(justo aqui), es para crear el parametro
        //destructuring
        let {img, name, gene, ram, almac, plataforma, precio} = game; //solo necesitamos llamar las variables abajo 
            return`
            <div class="card" style="border-radius:25px;width: 20rem;          background-image: linear-gradient(to right top, #002e567c, #3849738f, #6167907a, #8986ae73, #b1a7cd77);">
                <img src="${img}" class="card-img-top img-fluid" alt="..." id="imgCard" style="width:20rem; height: 20rem; object-fit:fill; border-radius:25px">
                <div class="card-body" style="text-align:center">
                    <h5 class="card-title" style="font-size: 1.5rem; box-sizing: border-box">${name}</h5>
                </div>
                 <ul class="list-group list-group-flush" style="border-top: dashed gray;">
                 <li ass="list-group-item">Genero: ${gene}</li>
                 <li ass="list-group-item">RAM minima: ${ram}GB</li>
                 <li ass="list-group-item">Espacio necesario: ${almac}GB</li>
                 <li ass="list-group-item">Dispositivos: ${plataforma}</li>
                 <li ass="list-group-item">Precio(COL$): ${precio}</li>
                <a href="#" class="btn btn-danger">Detalles</a>
                </ul>
            </div>     
                `
        })    
        return plantilla.join("") 
    },
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyCards[`${e.data.module}`](e.data.data))
})
