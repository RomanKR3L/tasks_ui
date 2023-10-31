function sum(leftOperand, rightOperand) {
    
    if (typeof leftOperand !== 'number' && typeof rightOperand !== 'number') {
      throw new Error("Operands are not numbers");
    } else if (typeof leftOperand !== 'number') {
      throw new Error("The left operand is not number");
    } else if (typeof rightOperand !== 'number') {
      throw new Error("The right operand is not number");
    }
  
    return leftOperand + rightOperand;
  }