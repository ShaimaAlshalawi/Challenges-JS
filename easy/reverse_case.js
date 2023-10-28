// عكس حالة الحروف
function reverse_case(strParam) {
    return strParam.replace(/./g, c => c === c.toUpperCase() ? c.toLowerCase() : 
  c.toUpperCase());

}
