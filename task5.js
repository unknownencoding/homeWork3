// //З клавіатури вводиться назва категорії водія 
// //(А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). 
// //Вивести на екран назву транспортного засобу, яким він може керувати.


let divingCategory = (prompt(`pleas enter category you driving licens A or B or C`));

if(divingCategory.toUpperCase() === 'A'){
alert('you can drive a motorcycle')
}
else if(divingCategory.toUpperCase() === 'B'){
alert('you can drive a car')
}
else if(divingCategory.toUpperCase() ==='C'){
alert('you can drive a track')
}
else(alert('you cannot drive a motorcycle, car or track'))