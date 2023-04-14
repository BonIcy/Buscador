import config from "../storage/config.js";
export default{
    show(){
    config.dataMySelectors();
    Object.assign(this, JSON.parse(localStorage.getItem("mySelectors")))
    const ws = new Worker("storage/wsMySelectors.js", {type: "module"});
    let id= [];
    let count = 0;
    ws.postMessage({module: "listSelectors", data: this.contenidos});
    id=["#busqueda"];
    ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, `text/html`)
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate():count++;
    })
    },
}

