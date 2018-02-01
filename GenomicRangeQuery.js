
// Link to task result  => https://app.codility.com/demo/results/training5A48FT-4A9/
// Link to Repl.it      => https://repl.it/@tdonatti/GenomicRangeQuery

function solution(X, A) {
    var map = {};
    var min = 1;
    
    for(var i = 0; i < A.length; i++) {
        if(A[i] > 0) {
            map[A[i]] = true;
        }
    }
    
    console.log(map)

    if(!map[min]) return 1;

    while(map[min]) min++;

    return min;
}

testCases = [
    [-1, 0, 1, 3, 6, 4, 1, 2],
    [1, 2, 3],
    [-1, -3]
];

testCases.forEach(N => console.log(solution(N)));

