// حساب مابعد الفاصلة

function Decimal_places(num) {
    const converted = num.toString();
    if (converted.includes('.')) {
        return converted.split('.')[1].length;
    }
    return 0;
}
