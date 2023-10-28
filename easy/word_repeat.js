// تكرار النص
function word_repeat(word, n) {
    let x = "";
    for (let i=1; i<=n ; i++){
        x += word;
        if (i!=n)
        	x += " ";
    }
    return x;
}
