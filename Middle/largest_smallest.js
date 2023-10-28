// إرجاع أكبر وأصغر قيمة في المصفوفة
function largest_smallest(array_values) {
    return [Math.max.apply(Math, array_values), Math.min.apply(Math, array_values)];

}
