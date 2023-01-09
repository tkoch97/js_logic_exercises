alert(`Vamos fazer sua lista de compras? Me diga 10 itens que você precisa comprar. Clique em OK para continuar.`)

let items = [];

for(let item = 0; item < 10; item++) {
      let itemName = prompt(`Me diga qual será o item de número ${item + 1}:`);
      items[item] = itemName;
}

alert(`Aqui está sua lista de compras: ${items}`)