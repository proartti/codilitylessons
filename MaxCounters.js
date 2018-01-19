
// Link to task result  => https://app.codility.com/demo/results/trainingVQGFP4-JFC/
// Link to Repl.it      => https://repl.it/@tdonatti/MaxCounters

function solution(N, A) {
  
  let counters = new Array(N).fill(0);
  let max = 0;
  let min = 0;

  A.map((value) => {
    if(value == N + 1) {
      min = max;
    } else {
      counters[value - 1] = Math.max(counters[value - 1], min) + 1;
      max = Math.max(counters[value - 1], max);
    }
  });

  result = counters.map((value) => Math.max(value, min));

  return result;
}


testCases = [
  [5, [3, 4, 4, 6, 1, 4, 4]],
  [5, [3, 2]]
];

testCases.forEach(N => console.log(solution(N[0], N[1])));

