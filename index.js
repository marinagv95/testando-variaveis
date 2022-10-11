// //Exercício 01:

// let valorGasolinaReais = parseFloat(prompt("Quanto de dinheiro gasto"));
// let valorCompra = parseFloat(valorGasolinaReais / 6.80);

// alert(`o cliente abasteceu: ${valorCompra.toFixed(2)} litros`);



// //Exercício 02:

// let valorCelsius = parseFloat(prompt("Valor em Celsius"));
// let valorFahrenheit = parseFloat((9 * valorCelsius + 160) / 5 );

// alert(`O valor ${valorCelsius}ºc em Fahrenheit é: ${valorFahrenheit}`);


// //Exercício 03:

// let valorGrauFarenheit = parseFloat(prompt("valor em Fahrenheit"));
// let ValorGrauCelsius = parseFloat(((valorGrauFarenheit - 32) * 5) / 9);

// alert(`O valor ${valorGrauFarenheit}ºf em Celsius é ${ValorGrauCelsius}`);



// //Exercício 04:

// let alturaCaixa = parseFloat(prompt("Altura da Caixa"));
// let comprimentoCaixa = parseFloat(prompt("Comprimento da Caixa"));
// let larguraCaixa = parseFloat(prompt("Largura da Caixa"));
// let volumeCaixa = parseFloat(alturaCaixa * comprimentoCaixa * larguraCaixa);

// alert(`O volume da caixa é ${volumeCaixa} m³⁠`);


// //Exercício 05:

// let valorInteiro = parseInt(prompt("Número Inteiro"));
// let valorAoQuadrado = parseInt(valorInteiro * valorInteiro);

// alert(`O valor ${valorInteiro} ao quadrado é ${valorAoQuadrado}`);


// //Exercício 06:

// let valorUm = parseFloat(prompt("valor um"));
// let valorDois = parseFloat(prompt("valor dois"));
// let valorTres = parseFloat(prompt("valor três"));
// let valorQuatro = parseFloat(prompt("valor quatro"));
// let valorCinco = parseFloat(prompt("valor cinco"));

// let somaValores = parseFloat(valorUm + valorDois + valorTres + valorQuatro + valorCinco);
// let mediaValores = ((valorUm + valorDois + valorTres + valorQuatro + valorCinco) / 5);

// alert(`A soma dos valores informados é: ${somaValores} e a média das notas é: ${mediaValores}`);


// //Exercício 07:

// let valorInteiro1 = parseInt(prompt("Primeiro valor inteiro"));
// let valorInteiro2 = parseInt(prompt("Segundo valor inteiro"));
// let sobraDivisao = parseFloat(valorInteiro1 % valorInteiro2);

// alert(`O resto da divisão de ${valorInteiro1} e ${valorInteiro2} é: ${sobraDivisao}`);


// //Exercício 08:

// let caracteres = prompt("Digite seu texto");
// let tamanho = caracteres.length;

// alert(`Esse texto tem ${caracteres.length} caracteres`);


// // Exercício 09:

// let caractereCompleto = prompt("Digite seu texto");
// let primeiroCaractere = caractereCompleto[0]

// let caractereComprimento = caractereCompleto.length;

// let ultimoCaractere = caractereCompleto[caractereComprimento - 1];

// alert(`A primeira letra dessa frase é ${caractereCompleto[0].toUpperCase(primeiroCaractere)} e a ultima letra é ${ultimoCaractere.toLowerCase(ultimoCaractere)}`);


// Exercício 10:


let primeiroNomeCracha = prompt("Digite seu nome");
let primeiroNomeMaiusculo = primeiroNomeCracha.toUpperCase();




let sobrenomeCracha = prompt("Digite seu sobrenome");
let sobrenomeMaiusculo = sobrenomeCracha.toUpperCase();



let nomeCompleto = primeiroNomeMaiusculo + " " + sobrenomeMaiusculo;


let idadeCracha = parseInt(prompt("Digite sua idade"));

let setorCracha = prompt("Digite seu setor");
let inicialSetorMaiusculo = setorCracha[0].toUpperCase();
let setorCompleto = inicialSetorMaiusculo + setorCracha.substring(1);

alert(`Nome: ${nomeCompleto} - Idade: ${idadeCracha} anos - Setor: ${setorCompleto}`);




