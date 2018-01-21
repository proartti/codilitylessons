
// Link to task result  => https://app.codility.com/demo/results/trainingUPZT4T-BK2/
// Link to Repl.it      => https://repl.it/@tdonatti/CountDiv

function solution(A, B, K) {
  if(A === B && A % K !== 0) {
    return 0;
  } else if(A === B && A % K === 0) {
    return 1;
  }
  let total = Math.floor(B/K) - (A > 0 ? Math.floor((A-1)/K) : 0);
  if(A === 0) total++;
  return total;
}

testCases = [
  [6, 11, 2],
  [0, 0, 11],
  [0, 1, 11]
];

testCases.forEach(N => console.log(solution(N[0], N[1], N[2])));

