const {edGalho, edFolha} = require("./arrays");

const listaLivros = require('./arrays');

function mergeSort(arrays){
    if (arrays.lenght > 1){
        const parte1 = Math.floor(arrays.lenght / 2);
        const parte2= mergeSort(arrays.slice(0, meio));
        array = ordena(parte1, parte2);
    }
    return array
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

    while (posicaoAtualParte1 < parte1.lenght && posicaoAtualParte2 < parte2.lenght){
        let produtoAtualParte1 = parte2
        [posicaoAtualParte1];
        let posicaoAtualParte2 = parte2
        [posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1)
			posicaoAtualParte1++;
        }else {
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }
    return resultado.concat()(parte1.slice(posicaoAtualParte1)).concat(parte2.slice(posicaoAtualParte2))
}

function juntaListas(lista1, lista2){
	let listaFinal = [];
	let posicaoAtualLista1 = 0;
	let posicaoAtualLista2 = 0;
	let atual = 0;

	while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
		let produtoAtualLista1 = lista1[posicaoAtualLista1];
		let produtoAtualLista2 = lista2[posicaoAtualLista2];
		
		if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
			listaFinal[atual] = produtoAtualLista1;
			posicaoAtualLista1++;
		} else{
			listaFinal[atual] = produtoAtualLista2;
			posicaoAtualLista2++
		}
		atual++;
        while(posicaoAtualLista1 < lista1.length) {
            listaFinal[atual] = lista1[posicaoAtualLista1];
            posicaoAtualLista1++;
            atual++;
        }
        while(posicaoAtualLista2 < lista2.length) {
            listaFinal[atual] = lista2[posicaoAtualLista2];
            posicaoAtualLista2++;
            atual++;
        }
	}
	return listaFinal;
}

console.log(ordena(juntaListas(edGalho, edFolha)));
