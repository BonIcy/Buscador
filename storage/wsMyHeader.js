let wsMyHeader={
    listCont(p1){
        return`
    <div class="bienvenida">${p1.title2}</div>
    <div class="this">
     <div class="perspective">
    <div class="sq"></div>
    <div class="s1"></div>
    <div class="s2"></div>
    <div class="s3"></div>
    <div class="s4"></div>
     </div>
    <div class="text">${p1.title}</div>
    </div>`
    },
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})