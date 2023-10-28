// دمج مصفوفتين
function mergeAndOrder(array1, array2) {
    var array = array1.concat(array2);
	return array.sort((a, b) => a - b);

}
