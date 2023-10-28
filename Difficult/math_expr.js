// التحقق من العملية الرياضية
function math_expr(expr) {
    var arr = [];
    var result = 0;

    if (expr.includes('+')) {
        arr = expr.split('+');
        result = parseInt(arr[0]) + parseInt(arr[1]);
    } 
    else if (expr.includes("*")) {
        arr = expr.split('*');
        result = parseInt(arr[0]) * parseInt(arr[1]);

    } 
    else if (expr.includes("/")) {
        arr = expr.split('/');
        result = parseInt(arr[0]) / parseInt(arr[1]);

    } 
    else if (expr.includes("-")) {
        arr = expr.split('-');
        result = parseInt(arr[0]) - parseInt(arr[1]);

    }
    else if (expr.includes("%")) {
        arr = expr.split('%');
        result = parseInt(arr[0]) % parseInt(arr[1]);
    } 
    else
        return false;


    if (isNaN(result))
        return false;
    else
        return true;

}
