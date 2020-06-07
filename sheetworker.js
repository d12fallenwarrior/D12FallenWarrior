// HABILIDADES DE ATRIBUTO VARIABLE
// Empatía: ast/int, Sanar: des/int, Seguridad: des/int
on("change:des change:ast change:int sheet:opened", function () {  // stat names need to be lower case here
    getAttrs(["des","ast","int"], function(values) {
        let d = parseInt(values.des)||0; 
        let a = parseInt(values.ast)||0; 
        let i = parseInt(values.int)||0; 
        let m_ai = Math.max(a,i);
        let m_di = Math.max(d,i);
    
        setAttrs({
            max_desint: m_di, max_astint: m_ai
        });
    });
});
on("change:tipotirada sheet:opened", function () {  // stat names need to be lower case here
    getAttrs(["tipotirada"], function(values) {
        let tipo = parseInt(values.tipotirada)||0; 
        let newpla = ""
        let newr3 = ""
        if (tipo === 3) {
            newpla = "tres";
            newr3 = "1d12cs0cf0";
          } else {
            newpla = "simple";
            newr3 = "0";
          }
        setAttrs({
            r3: newr3, plantilla: newpla
        });
    });
});