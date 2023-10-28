// العثور على العنصر الفريد في المصفوفة
function unique(arr) {
    var x = [];
    var y;
    for (var i=0; i<arr.length; i++){
    	y = arr[i];
        delete arr[i];
        if (arr.includes(y))
        {
            arr[i]=y;
            continue;
        }
        else 
        	x.push(y);
    }
	return x;

}
