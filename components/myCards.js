import config from "../storage/config.js";
export default{
    show(){
        config.dataMyCards();
        Object.assign(this, JSON.parse(localStorage.getItem("myCards")))
        const ws = new Worker("storage/wsMyCards.js", {type: "module"});
        let id = [];
        let count = 0;
        ws.postMessage({module: "listCards", data: this.games});
        id=["#tarjetas"];
;
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, `text/html`)
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate():count++;
           
        })
        }
/*         clear(){
            config.dataMyCards();
            Object.assign(this, JSON.parse(localStorage.getItem("myCards")))
            const ws = new Worker("storage/wsMyCards.js", {type: "module"});
            id2=[".card"];
            count2= 0;
            ws.removeMessage({module: "listCards", data: this.games});
            ws.addEventListener("remo", (e)=>{
                document.querySelectorAll(id2[count2]).remove(...doc.body.children);
                (id.length-1==count) ? ws.terminate():count++
            })
            } */
}