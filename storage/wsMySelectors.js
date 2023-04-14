
let wsMySelectors={
    listSelectors(p1){
        return`
        <form class="gx-3 gy-2 align-items-center filasForm">
        <div class="col-sm-2">
            <select id="genero" class="form-select">
            <option>${p1.genero.option.muestra}</option>
            <option>${p1.genero.option1.muestra}</option>
            <option value="${p1.genero.option2.muestra}">${p1.genero.option2.muestra}</option>
            <option value="${p1.genero.option3.muestra}">${p1.genero.option3.muestra}</option>
            <option value="${p1.genero.option4.muestra}">${p1.genero.option4.muestra}</option>
            <option value="${p1.genero.option5.muestra}">${p1.genero.option5.muestra}</option>
            <option value="${p1.genero.option6.muestra}">${p1.genero.option6.muestra}</option>
            </select>
         </div>

        <div class="col-sm-2">
            <select id="ram" class="form-select">
            <option value="">${p1.ram.option.muestra}</option>
            <option value="${p1.ram.option1.val}">${p1.ram.option1.muestra}</option>
            <option value="${p1.ram.option2.val}">${p1.ram.option2.muestra}</option>
            <option value="${p1.ram.option3.val}">${p1.ram.option3.muestra}</option>
            </select>
        </div>

        <div class="col-sm-2">
            <select id="almac" class="form-select">
            <option value="">${p1.almac.option.muestra}</option>
            <option value="${p1.almac.option1.val}">${p1.almac.option1.muestra}</option>
            <option value="${p1.almac.option2.val}">${p1.almac.option2.muestra}</option>
            <option value="${p1.almac.option3.val}">${p1.almac.option3.muestra}</option>
            </select>
        </div>

        <div class="col-sm-2">
            <select id="plataforma" class="form-select">
            <option value="">${p1.plataforma.option.muestra}</option>
            <option value="${p1.plataforma.option1.muestra}">${p1.plataforma.option1.muestra}</option>
            <option value="${p1.plataforma.option2.muestra}">${p1.plataforma.option2.muestra}</option>
            <option value="${p1.plataforma.option3.muestra}">${p1.plataforma.option3.muestra}</option>
            </select>
        </div>

          <div class="col-sm-2">
            <select id="precio"class="form-select">
            <option>${p1.precio.option.muestra}</option>
            <option value="${p1.precio.option1.val}">${p1.precio.option1.muestra}</option>
            <option value="${p1.precio.option2.val}">${p1.precio.option2.muestra}</option>
            </select>
        </div>
        </form>
        `
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMySelectors[`${e.data.module}`](e.data.data))
})



