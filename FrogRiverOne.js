
// Link to task result  => https://app.codility.com/demo/results/trainingGWTXNA-XZY/
// Link to Repl.it      => https://repl.it/@tdonatti/FrogRiverOne

function solution(X, A) {

    let leafs = new Set();
    result = -1;

    for (let i = 0; i < A.length; i++) {
        leafs.add(A[i]);
        if (leafs.size === X) {
            result = i;
            break;
        }
    }

    return result;
}

testCases = [
    [5, [1, 3, 1, 4, 2, 3, 5, 4]],
    [5, [1, 5, 1, 4, 2, 3, 3, 4]],
    [3, [1, 1, 1, 1, 1, 1, 3, 1, 2]],
    [5, [3, 2]]
];

  testCases.forEach(N => console.log(solution(N[0], N[1])));

