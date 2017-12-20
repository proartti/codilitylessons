
// Link to task result  => https://app.codility.com/demo/results/training4EDY8M-Q5D/
// Link to Repl.it      => https://repl.it/@tdonatti/PermCheck

function solution(A) {
    let result = 1;

    const sorted = A.sort((a, b) => {
        return a - b
    });

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != i + 1) {
            result = 0;
            break;
        }
    }

    return result;
}
  
testCases = [
    [4, 1, 3, 2],
    [4, 1, 3],
    [9, 5, 7, 3, 2, 7, 3, 1, 10, 8]
];
  
testCases.forEach(N => console.log(solution(N)));