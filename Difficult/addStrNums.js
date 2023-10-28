// جمع عددين داخل قيمة نصية
function addStrNums(num1, num2) {
    result = parseInt(num1) + parseInt(num2);
    if (isNaN(result))
        return -1;
    else
        return result;

}
