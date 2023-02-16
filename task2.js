// З клавіатури вводиться ціна товару і кількість грошей. 
// Якщо грошей не вистачає то відмовляємо у покупці, 
// інакше, якщо ще залишаються гроші, 
// то пропонуємо купити лотерею за 4 грн.

let price = parseFloat(prompt(`pleas enter price`))
let quantityMoneys = parseFloat(prompt(`pleas enter how mach money you have?`))

if (price>quantityMoneys){
    alert('sorry, no money-no shopping')
}
else if(price<quantityMoneys) {
    alert('You can make a shopping')

if (price + 4 <quantityMoneys){
    let ask = confirm('do you want to buy loto-zabava? 1 ticket = 4uan')
    if (ask ===true) {
        alert('Congratulations, on buying a lottery ticket')
    }
    else(alert('you saved your money'))
}
}
