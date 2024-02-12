const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersComma(n) {
    const numWithCommas = numberWithCommas(n)//100,235
    const persianNumber = toPersianNumers(numWithCommas);
    return persianNumber;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function toPersianNumers(n) {
    return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)])
}