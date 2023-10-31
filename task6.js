function checkNumber(num) {
    
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function hitOrRun(a, b) {
    const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
    
    if (checkNumber(randomNum)) {
      return 'run';
    } else {
      return 'hit';
    }
  }
  
  // Пример использования:
  const a = 2;
  const b = 5;
  const result = hitOrRun(a, b);
  console.log(result);