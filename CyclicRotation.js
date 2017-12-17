
// Link to task result  => https://codility.com/demo/results/trainingZFG9YX-9YY/
// Link to Repl.it      => https://repl.it/@tdonatti/CyclicRotation

function solution(A, K) {
    
      if(A.length == 0) {
          return A;
      }
    
      const collection = A;
      const cycles = K;
      
      for(let i = 0; i < cycles; i++) {
        let shiftNumber = collection.pop(collection.length - 1);
        collection.unshift(shiftNumber);
      }
      
      return collection;
  }
  
  testCases = [
    [[1, 2, 3, 4, 5], 4],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 1],
    [[], 0]
    ];
  
  testCases.forEach(N => console.log(solution(N[0], N[1])))
  