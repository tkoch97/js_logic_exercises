/* 
Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite a opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa

----

O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item na lista
Caso digite 2, poderá ver os itens cadastrados
  Se não houver itens cadastrados, mostrar a mensagem:
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

----

# Dados de entrada do usuário:
1. O número desejado
2. Cadastrar ítem na lista

#Variáveis:

1. as opções que o usuário pode escolher
2. a lista
*/


let items = [];
let options;

while (options != 3) {

  options = Number(prompt(`
    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))

  switch (options){
    case 1:
      let item = prompt(`Escreva o nome do item que deseja cadastrar:`)
      items.push(item)
      break;
    case 2:
      if (items.length == 0) {
        alert (`Não existem itens cadastrados, clique em OK para retornar ao menu principal.`)
      } 
      else {
          alert(`
          ${items}.
          
          Clique em OK para retornar ao menu principal.`)
      }
      break;
    case 3:
      alert(`Programa encerrado, até mais!`)
      break;
    default:
      alert(`Número inválido, clique em OK para retornar ao menu principal.`)
      break;
  }
}