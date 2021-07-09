function add(n1: number, n2: number) {
  return n1 + n2;
}

// This function does not have a return statement and uses (:void)
function printTheResult(num: number): void {
  console.log("result :" + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
printTheResult(add(5, 98));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(9, 7));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

