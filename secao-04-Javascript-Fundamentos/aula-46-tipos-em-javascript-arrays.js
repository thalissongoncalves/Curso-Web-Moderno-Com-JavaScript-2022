const valores = [7.7, 8.9, 6.9, 9.2];
console.log(valores[0], valores[3]); // 7.7, 9.2
console.log(valores[4]); // NaN

valores[4] = 10;
console.log(valores); // [ 7.7, 8.9, 6.9, 9.2, 10 ]
console.log(valores.length); // 5

valores.push({id: 3}, false, null, 'teste');
console.log(valores); // [ 7.7, 8.9, 6.9, 9.2, 10, {id: 3}, false, null, 'teste' ]

console.log(valores.pop()); // Tira e retorna o último valor de um array, ou seja, retorna "teste" da const valores

delete valores[0]; // Deleta o valor de index 0 da const valores

console.log(valores); // [ <1 empty item>, 8.9, 6.9, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof valores);