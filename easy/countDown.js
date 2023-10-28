// عداد رقمي تنازلي
function countDown(number) {
    return Array(number + 1).fill(0).map((_, i) => i * 1).reverse().join(' '); 
}
