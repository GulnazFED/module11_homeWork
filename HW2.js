function counter(a) {
  if (a >=1000) {
    console.log('число больше 1000, данные не верны');
  } else if (a === 0 ||  a === 1){
    console.log('Не определяется');
  } else if (a === 2){
    console.log('это не простое число');
  } else {
      let neProst = 0;
      let prost = 0;
      for (let i = 2; i < a-1; i++) {
            if (a % i === 0 ) {
              neProst++;
            } else {
              prost++;
            }
       }
  if (neProst>0) {
    console.log('это не простое число');
  } else {
    console.log('это простое число');
  }
  }

       
}

counter(5)