function debug(val, name='NoNameDebug'){
    console.log("______________________________________________________________________________________")
    
    let time = new Date
    console.log(`Debbugging "${name}" at time "${time.getHours()}h:${time.getMinutes()}m:${time.getSeconds()}ss"`)
    
    if (typeof(val) === "undefined") console.log(`Sorry "${name}" is shit, this type of shit "${typeof(val)}"`);
    else if (val === null) console.log(`Sorry "${name}" is shit, this type of shit "null"`);
    else if (Number.isNaN(val)) console.log(`Sorry "${name}" is shit, this type of shit "NaN"`);
    else if (typeof(val) !== "object") console.log(`"${name}" is a "${typeof(val)}"`);
    else if (val instanceof HTMLElement ){
        console.log(`"${name}" is an "HTML_Element"`)
        val.id? console.log(`ID = ${val.id}`): null
        console.log(`InnerHTML = "${val.innerHTML}"`)
        console.log(`CSS classes = ${val.classList}`)
        val.value? console.log(`Value = ${val.value}`): null
    }
    else if (typeof(val) === "function") console.log(`"${name}" is a "${typeof(val)}" and is "${val}"`);
    else if (typeof(val) ==="object") {
        if (Array.isArray(val)){console.log(`"${name}" is an "Array" with "${val.length}" elements`);}
        else{console.log(`"${name}" is an "Object"`); console.log("keys present:", Object.keys(val));};
        
        let constr = String(val.constructor)
        if (!(constr.includes("Object")) && !(constr.includes("Array"))) console.log("Constructor:", constr)
    }
    else {console.log("Not understood what it is sorry", typeof(val), "contact the master chef")};

    console.log("debugging:", val)
    
    console.log("______________________________________________________________________________________")
};

