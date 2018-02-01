
// Link to task result  => https://app.codility.com/demo/results/training67YU38-8ZC/
// Link to Repl.it      => https://repl.it/@tdonatti/Triangle

function solution(A) {
  let length = A.length;
  if(length < 3) return 0;

  let sortedA = A.sort((a, b) => a - b);
  let result = true;

  for(var i = 2; i < length; i++) {
    let refNum0 = sortedA[i-2];
    let refNum1 = sortedA[i-1];
    let refNum2 = sortedA[i];
    
    if(
      (refNum0 + refNum1 > refNum2) &&
      (refNum0 + refNum2 > refNum1) &&
      (refNum1 + refNum2 > refNum0)
    ) {
      return 1
    }
  }

  return 0;
}

const testCases = [
  [10, 2, 5, 1, 8, 20],
  [10, 50, 5, 1],
  [10, 50]
];

testCases.forEach(N => console.log(solution(N)));

