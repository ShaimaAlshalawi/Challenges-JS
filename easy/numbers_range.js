// طباعة سلسلة من الأرقام
function numbers_range(number) {
    return Array(number + 1).fill(0).map((_, i) => i * 1).join(' ');

}
