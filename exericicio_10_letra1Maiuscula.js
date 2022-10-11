// Exercício 10:


let primeiroNomeCracha = prompt("Digite seu nome");
let primeiroCaractereMaiusculo = primeiroNomeCracha[0].toUpperCase();
let nomeInicialCompleto = primeiroCaractereMaiusculo + primeiroNomeCracha.substring(1);



let sobrenomeCracha = prompt("Digite seu sobrenome");
let sobrenomeCaractereMaiusculo = sobrenomeCracha[0].toUpperCase();
let sobrenomeCompleto = sobrenomeCaractereMaiusculo + sobrenomeCracha.substring(1);


let nomeCompleto = nomeInicialCompleto + " " + sobrenomeCompleto;


let idadeCracha = parseInt(prompt("Digite sua idade"));

let setorCracha = prompt("Digite seu setor");
let inicialSetorMaiusculo = setorCracha[0].toUpperCase();
let setorCompleto = inicialSetorMaiusculo + setorCracha.substring(1);