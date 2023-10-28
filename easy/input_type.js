// نوع القيمة المدخلة
function input_type(value) {
    let v= Number.parseInt(value)
    if(Number.isNaN(v)) 
        return "string";
    if(value.includes(".")) 
    return "double";
    
    return "integer";

}
