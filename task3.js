// Випадковим чином генерується число від 1 до 5. 
// Спробуйте вгадати число за 2 спроби.

const max = 5;
const min = 1;
let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    //  newNum = (prevNum - minValue+N)%(maxValue-minValue+1) +minValue
let enterNum = parseInt(prompt('pleas enter the number from 1 to 5'));
if(enterNum===numRandom){
    alert('bingoooo, you are winner') 
}
else{ (alert('not trues, try again')) 
enterNum = parseInt(prompt('pleas enter another number from 1 to 5'));

        if(enterNum===numRandom)
        alert('bingoooo, you are winner')

        else alert('not trues, mission is failed')
}
