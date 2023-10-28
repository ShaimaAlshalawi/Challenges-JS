// مضروب العدد
function factorial(number) {
    var x = 1;
    if (number == 0 || number == 1) {
        return x;
    } else {
        for (var i = number; i > 1; i--) {
            x = x * i;
        }
    }
    return x;

}
