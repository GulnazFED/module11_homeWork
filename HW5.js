const ArrowFunction = (x, n) => {
  let result = x;
  for (let i = 2; i<= n; i++) {
    result = result*x;
  }
  if (n === 0) {
  return console.log(1);
  } else {
  return console.log(result);
  }
  
};

ArrowFunction(2,3)