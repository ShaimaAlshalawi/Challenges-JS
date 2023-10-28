// إزالة الرموز من النصوص
function removeSpecialCharacters(strParam) {
    return strParam.match(/(\w+|\-+|\s)/g).join('');

}
