import config from "../storage/config.js";

export default {
    show(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")))
        //creamos el worker
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
        let id = [];
        let count = 0;
        //enviamos un msj al worker
        ws.postMessage({module: "listCont", data: this.cont})
        id =["#headerr"];
        //esto es lo que recibe el worker
        ws.addEventListener("message", (e)=>{
            //parseamos lo que trae el evento (el mensaje)
            let doc = new DOMParser().parseFromString(e.data, `text/html`)//recordar poner html y no xml
            //insertamos el id puesto en el html
            document.querySelector(id[count]).append(...doc.body.children);
            //terminamos el worker
            (id.length-1==count) ? ws.terminate():count++;
        })
    }
}