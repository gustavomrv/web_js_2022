// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

function even_1_100() {
    const vet = []
    for (let index = 1; index < 101; index++) {
        if (index%2 == 0) {
            vet.push(index)
        }        
    }
    console.log(vet)
}

even_1_100()

// const even_1_100_smart = 