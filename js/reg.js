// 正则去除字符串左右两边空格
function trim (str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
// 正则去除左边空格
function leftTrim (str) {
    return str.replace(/(^\s*)/g, "");

}
// 正则去除右边空格
function rightTrim (str) {
    return str.replace(/(\s*$)/g, "");
}

console.log(trim("  abc  "));
console.log(trim("  abc"));
console.log(trim("abc  "));