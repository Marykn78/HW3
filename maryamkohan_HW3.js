//------------------------------------------------------- 1
function tavan(num){
    num = Math.round(Math.sqrt(num));
    num +=1;
    console.log(num);
}
tavan(101);
//------------------------------------------------------- 2
function divisor(number,sum=1){
    // let sum=1;
    for(let i=2;i<=number/2;i++){
        if(number%i===0){
            sum +=i;
        }
    }
sum==number ? console.log('Yes') : console.log('No');
}
divisor(21);
//-------------------------------------------------------- 3
function triangle(a,b,c){
    if((a**2===b**2+c**2) || (b**2===a**2+c**2) || (c**2===b**2+a**2)){
        console.log('Yes')
    }
    else{
        console.log('No')
    }
}
triangle(3,4,5);
//-------------------------------------------------------- 4
function object(firstName,lastName,age,phone,mail){
    console.log(`{ firstName:'${firstName}',
  lastName: '${lastName}',
  age: '${age}',
  phoneNumber: '${phone}',
  email: '${mail}'
}`)
}
object('maryam','kohan',23,09194567854,'maryam@gmail.com');
//-------------------------------------------------------- 5
function BMI(height,weight,BMI){
    BMI=weight/(height**2);
    BMI=BMI.toFixed(2)
    console.log(BMI)
    if(BMI<18.5){
        console.log('Underweight')
    }
    else if(BMI >= 18.5 && BMI <= 25){
        console.log('Normal')
    }
    else if(BMI >= 25 && BMI < 30){
        console.log('Overweight')
    }
    else if(30<=BMI){
        console.log('Obese')
    }
}
BMI(1.71,83);
//------------------------------------------------------ 6
let point=13;
let day=3;
if(day===0){
    console.log('20')
}
else if(day===7){
    console.log(point)
}
else if( 8 <= day || day < 7){
    point=point-day;
    console.log(point)
}
