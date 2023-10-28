// أكثر القيم تكرارا في المصفوفة
function most_frequent_element(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();

}
