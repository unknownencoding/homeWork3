// //З клавіатури вводиться вік людини. Вивести на екран ким він є 
// //(дитиною у садочку, школярем, студентом, працівником, пенсіонером).


let userAge = parseInt(prompt(`pleas enter you age`));

if (userAge<7) {
    alert('Ви є дитиною у садочку')
}
else if (userAge >=7 && userAge<17){
    alert('Ви є школярем')
}
else if (userAge >=17 && userAge<21){
    alert('Ви є студентом')
}
else if (userAge >=17 && userAge<21){
    alert('Ви є студентом')
}
else if (userAge >=21 && userAge<60){
    alert('Ви є працівником')
}
else if (userAge >=60){
    alert('Ви є пенсіонером')
}