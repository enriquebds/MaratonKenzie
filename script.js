function positions(firstPlace, secondPlace, lastPlace) {
    let arr = [firstPlace, secondPlace, lastPlace]
    let aux = [`1ª - Colocado ${arr[0]}`, `2ª - Colocado ${arr[1]}`, `3ª - Colocado ${arr[2]}`]

    if("Daniel" === lastPlace){
        return [`1ª - Colocado ${arr[0]}`, `2ª - Colocado ${arr[2]}`, `3ª - Colocado ${arr[1]}`]
    }else if("Daniel" === secondPlace){
        return [`1ª - Colocado ${arr[1]}`, `2ª - Colocado ${arr[0]}`, `3ª - Colocado ${arr[2]}`]
    }
    return aux
}

console.log(positions("Rafael", "Manoel", "Daniel"))
console.log(positions("Rafael", "Daniel", "Manoel"))
console.log(positions("Manoel", "Daniel", "Rafael"))
console.log(positions("Manoel", "Rafael", "Daniel"))
console.log(positions("Daniel", "Rafael", "Manoel"))
console.log(positions("Daniel", "Manoel", "Rafael"))
/*se estiver Daniel na posição 2, sobe para a 1
se estiver Daniel na posição 3, sobe para a 2
se estiver Daniel na posição 1 não tem como subir mais.*/ 
