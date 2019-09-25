function imprimirEscalera(n) {
    
    for(let i = 0; i<n; i++) {  //me paro en una fila
        let resultadoFila = "";
        let espaciosFila = "";
        let numeralesFila = "";

        //completar la fila con espacios
        espaciosFila = stringConSimbolo(n - (i+1), " ");

        //completar la fila con #
        numeralesFila = stringConSimbolo(i+1, "#");

        resultadoFila = espaciosFila + numeralesFila;
        console.log(resultadoFila);
    }
}

function stringConSimbolo(n, simbolo) {
    let resultado = "";
        for (let i = 0; i < n ; i++ ) {
          resultado += simbolo;
    }

    return resultado;
}


imprimirEscalera(4);