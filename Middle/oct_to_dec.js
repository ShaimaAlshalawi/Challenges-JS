// تحويل رقم ثماني إلى رقم عشري
function oct_to_dec(octal_number) {
    var dec = parseInt(octal_number, 8).toString(10);
    return dec;

}
