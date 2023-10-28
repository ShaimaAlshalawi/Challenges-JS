// حساب تكرار حرف
function count_char(sentence, ch) {
    return (sentence.match(new RegExp(ch, "g")) || []).length;

}
