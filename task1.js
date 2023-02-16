//З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
//Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

let nameChid1 = prompt(`pleas enter first child name`)
let nameChid2 = prompt(`pleas enter second child name`)

let quantityCandiesChid1 = parseInt(prompt('pleas enter quantity Candies Chid_1'))
let quantityCandiesChid2 = parseInt(prompt('pleas enter quantity Candies Chid_2'))

if (quantityCandiesChid1>quantityCandiesChid2) {
    document.write(`${nameChid1} hawe more candies then ${nameChid2} `)
}
else if(quantityCandiesChid1<quantityCandiesChid2){
    document.write(` ${nameChid2} hawe more candiea then ${nameChid1} `)
}

else(document.write(` ${nameChid2} and ${nameChid1} hawe same quantyt candies `)
)
