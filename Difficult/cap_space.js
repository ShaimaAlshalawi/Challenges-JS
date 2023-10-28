// فصل الكلمات
function cap_space(txt) {
    words = txt.split(/(?=[A-Z])/)
    word = words.map(name => name.toLowerCase());
    return word.reduce((a, b) => a + " " + b);

}
