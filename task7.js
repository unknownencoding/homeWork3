// //З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

let dayNumber = parseInt(prompt('pleas enter the number of the month of the year 0-11'));

if(dayNumber<=2) {
    alert('Winter')
}

else if(dayNumber>=3 && dayNumber <= 5) (
    alert('spring')
)
else if(dayNumber>=6 && dayNumber <= 8) (
    alert('Summer')
)
else if(dayNumber>=9 && dayNumber <= 11) (
    alert('autumn')
)
else (alert('enter number 0-11')) 
