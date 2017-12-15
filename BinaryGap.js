
function solution(N) {
    const binaryValue = N.toString(2);
    const binaryArray = binaryValue.split('');
    
    let gapComtrol = false;
    let counter = 0;
    let result = 0;

    for(let i = 0; i < binaryArray.length; i++) {
      if(binaryArray[i] == 0) {
        if(gapComtrol === true) {
          if(i != (binaryArray.length - 1)) {
            counter += 1;
            continue;
          } else {
            counter = 0;
          }
        }
        if(binaryArray[i - 1] == 1) {
          gapComtrol = true;
          counter += 1;
          continue;
        }
      }

      if(binaryArray[i] == 1 && gapComtrol === true) {
        gapComtrol = false;
        if(counter > result) {
          result = counter;
        }
        counter = 0;
      }

    }
    
    return result;
}

const testNumber = [9, 529, 20, 15, 1041, 561892, 74901729, 1376796946];

testNumber.forEach((N) => console.log(solution(N)));