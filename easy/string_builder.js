// بناء النصوص
function string_builder(expression) {
    let result = "";
 
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] !== ']') {
            result += expression[i];
        } else {

            let temp = "";
            while (result.length > 0 && result[result.length - 1] !== '[') {
                
                temp = result[result.length - 1] + temp;
                result = result.slice(0, -1);
            }
 
            result = result.slice(0, -1); 
 
            let num = "";
            while (result.length > 0 && !isNaN(result[result.length - 1])) {
                
                num = result[result.length - 1] + num;
                result = result.slice(0, -1);
            }
            let int_num = parseInt(num);
 
            while (int_num--) {
                result += temp;
            }
        }
    }
 
    return result;

}
