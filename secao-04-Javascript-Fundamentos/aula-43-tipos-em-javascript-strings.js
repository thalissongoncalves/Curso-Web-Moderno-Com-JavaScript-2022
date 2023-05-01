const escola = "Cod3r";

console.log(escola.charAt(4)); // index 4 da const escola: "r"
console.log(escola.charAt(5)); // index 5 da const escola: NaN
console.log(escola.charCodeAt(3)); // index 3 da const escola: "3" e retorna o valor baseado na tabela unicode que é 51
console.log(escola.indexOf('3')); // itera a string procurando o valor "3" e retorna o index de onde ela está

console.log(escola.substring(1)); // pega os valores a partir do index 1 da const escola: "od3r"
console.log(escola.substring(0, 3)); // pega os valores a partir do index 0 até o index 3 da const escola sem incluir o index 3: "Cod"

console.log('Escola '.concat(escola).concat("!")); // "Escola Cod3r!"
console.log('Escola ' + escola + "!"); // "Escola Cod3r!"
console.log(escola.replace(3, 'e')); // itera a string, pega o index 3 e substitui pelo "e", ficando: "Coder"

console.log('Ana,Maria,Pedro'.split(',')); // "['Ana', 'Maria', 'Pedro']"