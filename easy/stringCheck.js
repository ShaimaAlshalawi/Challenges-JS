// التحقق من النصوص في المصفوفة
function stringCheck(value) {
    if (!value.length) 
    	return true;
    return value.reduce(function (a, b) {
           return (a === b) ? a : (!b);
           }) === value[0];
}
