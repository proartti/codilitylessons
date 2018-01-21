
// Link to task result  => https://app.codility.com/demo/results/trainingKE7E7V-2WC/
// Link to Repl.it      => https://repl.it/@tdonatti/PassingCars

function solution(A) {
  let eastCars = 0;
  let pairs = 0;
  for(let value of A){
    if(value === 0) {
      eastCars++;
    }
    if(value === 1) {
      pairs = pairs + eastCars;
      if(pairs > 1000000000) return -1
    }
  }
  if(eastCars === 0 || pairs === 0) return 0;
  return pairs;
}


testCases = [
  [0, 1, 0, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 1, 0, 1],
  [0, 1],
  [1, 1, 1, 1, 1],
  [1],
  [0]
];

testCases.forEach(N => console.log(solution(N)));

