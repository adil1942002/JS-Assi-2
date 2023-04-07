alert("Hello world");
 
var myName = "Ahmed";
myName = " Adil raza ";
console.log(myName); //Adilraza 

var fName ;
fName = " Adil ";
console.log(fName); //Adil

var num = 200;
var num1 = 100;
var tNum = num + num1 + 200;
console.log(tNum); //500

var num2 = 90;
num2 = num2 + 10;
console.log(num2); //100

var num3 = 25 + 25 + 25 + 25;
console.log(num3); //100

var num4 = 25 + 25 - 10 + 20;
console.log(num4);//60

var num5 = 10 * 5 - 10 + 60;
console.log(num5);

var num6 = 27 % 2;
console.log(num6); //1

var num7 = 19;
num7++;
var num8 = num7 + 31;
console.log(--num8);//50

var num9 = (10 + 10) * 10 + 10;
console.log(num9); //210

var num10 = (10 * 5) * (2 + 8) + 3 % 3;
console.log(num10); //500

var num11 = 9 % 2;
console.log(num11); //1
 
var userName ="Abid";
var All = userName + myName + fName;
console.log(All);

var yourName = prompt("Enter Your Name" );
var sName = yourName;

if(sName === userName){
console.log("login");
}
else if(sName !== userName)
{
    console.log("Better luck next time.")
}

var eng = +prompt("Enter Eng");
var urdu = +prompt("Enter urdu");
var math = +prompt("Enter math");
var islam = +prompt("Enter islam");
var bio = +prompt("Enter bio");
var Totle = eng + urdu + math + islam + bio;
var per = Totle / 500 * 100;
if( Totle >= 0 &&  Totle <= 500)
{
if(per >= 90 ){
    console.log("A+ " + per + " % " );
}
else if (per >= 80){
    console.log("A " + per + " % " );
}
else if (per >= 70){
    console.log("B " + per + " % " );

}
else if (per >= 60){
    console.log("C " + per + " % " );

}
else if (per >= 50){
    console.log("D " + per + " % " );

}
else if (per >= 40 || per >= 10 ){
    console.log("Fail " + per + " % " );

}
}
else{
    console.log("That's rong Number")
}

var arry = ["Adil", "abid","hussain","ahmed","ubaid"];
arry [1] = "raza";
arry [4] = "raza"
console.log(arry);


var arry1 = ["Adil","raza" ,"abid","hussain","ahmed", "raza" ,"ubaid"]
arry1.pop();
console.log(arry1)

var arry2 = ["Adil","raza" ,"abid","hussain","ahmed", "raza" ,"ubaid"]
arry2.push("raza");
console.log(arry2)