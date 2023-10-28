// حساب عدد الكلمات
function countWords(txt) {
    var splits = txt.split(/(\s+)/);
    var words = splits.filter((x) => x.trim().length>0);
    var count = words.length;
	return count;
}
