// تاريخ الميلاد

function kSumSubset(dateString) {
    var now = new Date(); 
    var d = new Date(dateString); 
    year = d.getFullYear(); 
 
    return d < now && (now - d) / (1000 * 3600 * 24 * 365) > 4 && year > (now.getFullYear() - 200); 
}
