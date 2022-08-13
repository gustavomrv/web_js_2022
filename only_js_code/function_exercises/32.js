// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function media(vet) {
    var v = 0
    var n = 0
    vet.forEach(element => {
        v+=element
        n+=1
    });
    console.log(v/n)
}
media([2,4,1,3,4,5,4,8])