function time(){

var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var mins = today.getMinutes();
var secs = today.getSeconds();

document.getElementById("day").innerHTML = "Today is :" +  daylist[day];
document.getElementById("time").innerHTML = "The time is " + hour + ":" + mins + ":" + secs;

}


function add(){
    var a = document.getElementById("firstNumber").value;
    var b = document.getElementById("secondNumber").value;
    
    var num1 = parseInt(a);
    var num2 = parseInt(b);

    document.getElementById("para1").innerHTML = num1+num2;
}

function multiply(){
    var a = document.getElementById("firstNumber").value;
    var b = document.getElementById("secondNumber").value;

    //var resultMultiply = a * b;

    document.getElementById("para1").innerHTML = a * b;
}


function minus(){
    var a = document.getElementById("firstNumber").value;
    var b = document.getElementById("secondNumber").value;

    document.getElementById("para1").innerHTML = a - b;
}


function divide(){
    var a = document.getElementById("firstNumber").value;
    var b = document.getElementById("secondNumber").value;

    document.getElementById("para1").innerHTML = a / b;
}


function ctof(){
    var a = document.getElementById("txtCenti").value;  

    document.getElementById("para2").innerHTML = (a * 9/5) + 32 ;
}

//(a − 32) * 5/9

function ftoc(){
    var a = document.getElementById("txtCenti").value;  

    document.getElementById("para2").innerHTML = (a - 32 ) * 5/9 ;
}

function fizzBuzz(){
    
    var para3= document.getElementById("fizzBuzz");

    for (let i = 1; i<=100 ; i++) {
    if((i%3)==0) console.log("Fizz");
    else if ((i%5)==0) console.log("Buzz");
    else console.log(i);                
    }
    
    
}

