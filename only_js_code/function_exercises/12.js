// 12) Faça um algoritmo que calcule o fatorial de um número.

function fat(a,n) {   
    //console.log(a)
    a *= n
    n -= 1
    if (n > 0) {
        return fat(a,n)
    }  
    else return a
}
const x = fat(1,4)
console.log(x)