let lista = [];
total = 99;

for (let i = 0; i <= total; i++){
    lista[i] = i+1;

    if(lista[i] % 3 == 0 && lista[i] % 5 == 0){
        console.log("buzzfizz, ",lista[i])
    }
    if(lista[i] % 3 == 0 && lista[i] % 5 != 0){
        console.log("buzz, ",lista[i])
    }
    if(lista[i] % 5 == 0 && lista[i] % 3 != 0){
        console.log("fizz, ",lista[i])
    }
}
