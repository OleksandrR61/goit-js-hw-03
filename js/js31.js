// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов,
    // считала и возвращала их сумму.

// Change code below this line
function add(...args) {
    let result = 0;
    
    for (const arg of args) {
        result += arg;
    }

    return result;
  // Change code above this line
}

