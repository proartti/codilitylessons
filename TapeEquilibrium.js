
// Link to task result  => https://codility.com/demo/results/trainingBNSEM2-NFZ/
// Link to Repl.it      => https://repl.it/@tdonatti/TapeEquilibrium

function solution(A) {
    const length = A.length;

    let left = [0];
    let right = [];

    A.map((value, key, arr) => {
      let reverseKey = length - key - 1;

      if(key !== 0) {
        left[key] = left[key - 1] + A[key - 1];
      }
  
      if(reverseKey === length - 1) {
          right[reverseKey] = A[reverseKey];
      } else {
          right[reverseKey] = right[reverseKey + 1] + A[reverseKey];
      } 
    });

    let result = Math.abs(left[1] - right[1]);

    for(let i = 2; i < left.length; i++) {
        let diff = Math.abs(left[i] - right[i]);
        if (diff < result) {
            result = diff;
        }
    }

    return result;
}

testCases = [
  [3, 1, 2, 4, 3],
  [-1000, 1000],
  [-10, -20, -30, -40, 100]
];

testCases.forEach(N => console.log(solution(N)));
