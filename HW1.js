let massiv = [1,5,8,7,6,9,null,100,"str"];
let oddNum=0;
let notOdd = 0;

function counter(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    
            if (typeof arr[i] === 'number') {
                if (arr[i] % 2 === 0 && arr[i] !== 0) {
                                    
                 oddNum++;
                    

                } else {
                  
                  notOdd++;
                    
                }
            } else if (typeof arr[i] === 'string') {
                console.log(arr[i] + ' это строка')
            } else if (arr[i] == null) {
                console.log(arr[i] + ' это нуль')
            } else {
                console.log('непонятно что')
            }
        }
  console.log(oddNum + ' количество четных');
  console.log(notOdd + ' количество нечетных');
}
counter(massiv)




