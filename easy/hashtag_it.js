// إضافة الرمز # لجميع حدود المصفوفة
function hashtag_it(my_array) {
    var s ="";
    for (var i=0; i<my_array.length; i++){
        s += '#' + my_array[i];
        if (i != (my_array.length-1))
            s += " ";
    }
    return s;
}
