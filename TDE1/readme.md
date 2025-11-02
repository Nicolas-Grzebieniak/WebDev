Aplicação de Funções em JavaScript

Objetivo:
Demonstrar o uso de diferentes tipos de funções em JavaScript (nomeadas, anônimas e arrow functions), além do conceito de callback.

1. Funções Nomeadas

As funções soma, subtracao, multiplicacao e divisao realizam operações matemáticas básicas.
Exemplo:

soma(10, 5); // retorna 15

2. Função Anônima

A função calcularMedia é uma função anônima armazenada em uma variável, que calcula a média dos elementos de um array.

calcularMedia([2, 5, 8]); // retorna 5

3. Arrow Functions

filtrarPares: filtra números pares de um array.

dobrar: retorna um novo array com os valores multiplicados por 2.

filtrarPares([1,2,3,4]); // retorna [2,4]

4. Função com Callback

executarOperacao(a, b, operacao) recebe uma função como parâmetro (callback), permitindo reutilizar o código para qualquer operação matemática.

executarOperacao(6, 3, multiplicacao); // retorna 18
