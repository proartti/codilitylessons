
// Link to task result  => https://codility.com/demo/results/trainingNBNR4S-9SJ/
// Link to Repl.it      => https://repl.it/@tdonatti/OddOccurrencesInArray

function solution(A) {

  const collection = A.sort();
  let result = [];

  for(const number of collection) {
    if(result[result.length - 1] != number) {
      result.push(number)
    } else {
      result.pop(result.last)
    }
  }

  return Number(result);
}

const ArrColl = [
  [9, 7, 9],
  [9, 3, 9, 3, 9, 7, 9],
  [1, 9, 3, 9, 3, 9, 7, 9, 7],
  [1, 9, 3, 9, 9, 7, 9, 7, 1, 15, 3, 4, 4],
  [1]
];

ArrColl.forEach((Arr) => console.log(solution(Arr)))