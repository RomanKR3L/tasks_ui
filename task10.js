function task10(num) {
    while (num >= 10) {
        
        let numStr = num.toString();
        
        let product = 1;
        
        
        for (let i = 0; i < numStr.length; i++) {
            
            product *= parseInt(numStr[i]);
        }
      
        num = product;
    }
    
    return num;
}

console.log(task10(999));