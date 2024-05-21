let lista = [1,2,3,4,5,6,7,9,10,12]
let total = 10

for (let i = 1; i < total; i++) {
    if (lista[i] - lista[i-1] != 1){
        console.log("Está faltando o número: ",lista[i]-1)
    }
}
