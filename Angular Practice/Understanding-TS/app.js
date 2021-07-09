function add(n1, n2) {
    return n1 + n2;
}
// This function does not have a return statement and uses (:void)
function printTheResult(num) {
    console.log("result :" + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printTheResult(add(5, 98));
var combinedValues;
combinedValues = add;
console.log(combinedValues(9, 7));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
