
// Link to task result  => https://codility.com/demo/results/training3WYUHV-YJ8/
// Link to Repl.it      => https://repl.it/@tdonatti/PermMissingElem

function solution(A) {
    
    // making the sort function strinct a-b is faster than just use sort()
    const ordered = A.sort(function(a, b) {
        return a - b;
    });

    let result = 1;
    let key = 0;

    while(result === ordered[key]){
        result++;
        key++;
    }

    return result;
}
  
testCases = [
    [3,1,2,5],
    [],
    [1],
    [2,3,4],
    [1,2,3,4,5]
];
  
testCases.forEach(N => console.log(solution(N)));