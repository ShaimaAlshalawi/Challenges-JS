// جمع الأعداد الفردية في مصفوفة
function sumOdd(arr) {
    var sum = 0;
    for (var i=0; i< arr.length; i++){
    	if (arr[i]%2!=0)
        	sum += arr[i];
    }
    return sum;

}
