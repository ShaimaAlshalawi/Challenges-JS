// تاريخ اليوم
function date_format(date) {
    var d = new Date(date);
    day = d.getDate();
    mongth = d.getMonth() + 1;
    year = d.getFullYear();
    return `${year}/${mongth}/${day} | ${year}-${mongth}-${day} | ${mongth}/${day}/${year}`;

}
