
// Link to task result  => https://codility.com/demo/results/training34X8FF-V3N/
// Link to Repl.it      => https://repl.it/@tdonatti/FrogJmp


function solution(X, Y, D) {
    return Math.ceil((Y - X) / D); 
}

frogJups = [
    [10, 85, 30],
    [1, 2, 1],
    [123, 42433, 4],
];

frogJups.forEach(N => console.log(solution(N[0], N[1], N[2])))
