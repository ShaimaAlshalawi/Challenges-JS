// تحويل رقم ثماني إلى رقم ست عشري
function oct_to_hex(octal_number) {
    var hex = parseInt(octal_number, 8).toString(16);
    return hex.toUpperCase();

}
