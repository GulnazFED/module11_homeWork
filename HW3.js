function example(a) {
  
  return function(b=2){

    return console.log(b*a);
  }; // не поняла как задать аргумент для второй функции кроме как так

};

const results =  example(10)

results();
