// الجمع التراكمي
function cumulative_addition(elements_array) {
    sum = 0; 
    for (i = 0; i < elements_array.length; i++) { 
        sum += elements_array[i]; 
    } 
    return [sum, elements_array.length]; 
}
