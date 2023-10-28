// ترتيب المصفوفة حسب الشرط
function sort_array(my_array, typeParam) {
    switch (typeParam) {
    case "S":
      return my_array.sort((a, b) => a - b);
      break;
    case "B":
      return my_array.sort((a, b) => b - a);
      break;
  }

}
