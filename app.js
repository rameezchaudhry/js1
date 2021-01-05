// *******************chapter 1**************
alert("welcome");

alert("Error! Please enter a valid password.")

alert("Welcome to JS Land... \n Happy Coding!");

alert("Welcome to JS Land");
alert("Happy Coding!");

console.log("Hello... I can run JS through my web browser's console");

alert("alert on new file");



// *******************chapter 2**************
 
var username;

var myName = "John Doe";

var message = "Hello World"
alert(message);

var studentName = "Jhone Doe";
var studentAge = 15 +" years old";
var studentCourse = "Ceritfied Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);

alert(" PIZZA \n PIZZ \n PIZ \n PI \n P")

var email = "example@example.com";
alert("My email address is " + email);

 var book = "A smarter way to learn JavaScript";
 alert("I am trying to learn from the Book " + book );
 
document.write("Yah! I can write HTML content through JavaScript")


var x = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(x);

// *******************chapter 3**************
var age = 15;
alert("I am " + age + " years old");

var visit = 14;
alert("You have visited this site " + visit + " times")

var myBirthYear = 1990;
document.write("My birth year is " + myBirthYear + "<br /> Data type of my ddeclared variable is number" + "<br>" );


var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<b>"+visitorName+ " </b> ordered <b> " +quantity +" " +productTitle + "</b>(s) on XYZ Clothing store”." );

// **************Chapter4*****************

var firstName = "John";
var middleName = "Carter";
var Last_name ="Doe";
document.write("My full name is "+ firstName + middleName + Last_name );


// ***Legal Variable***
var $one;
var name;
var name1;
var myName;
var myalert;


// ***Illegal Variable***
//  var ?one;
//  var .one;
// var 1name;
// var my name;
// var alert;

document.write("<h1>Rules for naming JS variable</h1> ");
document.write(" <br> Variable names can only contain number,letter,dollarsign($) and underscore(_).");
document.write("<br> Variables must begin with a letter,dollarsign($) and underscore(_).");
document.write("<br> Variable names are case sensetive");
document.write("<br> Variable names should not be JS Keyword");


// **************CHAPTER 5 *************
var a = 3 ;
var b = 5 ;
var c = a + b;
document.write("Sum of "+ a +" and " + b + " is " + c + "<br>");

var d = a-b;
document.write("Subtraction of "+ a +" and " + b + " is " + d + "<br>");

var e = a*b;
document.write("Multiplication of "+ a +" and " + b + " is " +  e + "<br>");

var f = a/b;
document.write("divsion of "+ a +" and " + b + " is " + f + "<br>");

var g = a%b;
document.write("divsion of "+ a +" and " + b + " is " + g + "<br><br><br>");

var k;
document.write("Value after variable declaration is: " + k +"<br>");
k = 5;
document.write("Initial value: " + k +"<br>");
++k;
document.write("Value after increment " + k +"<br>");
k=k+7;
document.write("Value after addition 7 is: " + k +"<br>");

k=--k;
document.write("Value after decrement is: " + k +"<br>");
k=k%3;
document.write("The remainder is : " + k +"<br> <br><br>");

var cost = 600;
var quantity = 5;
var totalCost = cost*quantity; 
document.write( "Total cost to buy "+quantity+" tickets to a movie is "+ totalCost + "PKR" + "<br><br><br>");


var a = 4;
document.write("Table of " + a +"<br>")
for(i = 1; i <= 10; i++)
{

    document.write(a + "x" + i + "=" + a*i + "<br>");
}
document.write("<br><br>");


var tempCelsius = 25;
 var d = (tempCelsius*(9/5))+32;
 document.write(tempCelsius+"℃ is "+ d + "℉"+ "<br>");
 var tempFahrenheit = 70;
 var e = (tempFahrenheit-32)*5/9;
 document.write(tempFahrenheit+"℉ is "+ e + "℃" + "<br><br><br>");


var item1 = 650;
var quantityItem1 = 3;
var item2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;

document.write("<h1>Shopping Cart</h1>"+ "<br>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>" );

document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges "+shippingCharges + "<br>");
var totalCost = (item1*quantityItem1) + (item2*quantityItem2) +shippingCharges ;
document.write("Total cost of your order is "+totalCost + "<br><br><br>" )

var totalMarks = 980 ;
var marksObtained = 804 ;
var percentage = (marksObtained/totalMarks)*100;
document.write("<h1>Mark Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "% <br><br>");


document.write("<h1>Currency in PKR</h1>");
var oneUsDollar = 104.80;
var oneSaudiRiyal = 28;
var totalCurrency = (10*oneUsDollar) + (25*oneSaudiRiyal);
document.write("Total Currency in PKR:" + totalCurrency +"<br> <br>");


var num = 10;
document.write("Calculation in Single line = " + ((num+5)*10)/2 +"<br> <br>" );

document.write("<h1>The Age Calculator</h1>");
var currentYear = 2021;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth Year: "+birthYear+"<br>");
document.write("Your Age is: "+age+"<br><br><br>");


document.write("<h1>The Geometrizer</h1>");
var radius = 20;
var circumference = 2*(3.142)*radius;
var area = (3.142)*radius*radius;
document.write("Radius of a circle"+radius+"<br>");
document.write("The circumference is :" +circumference+"<br>");
document.write("The area is :"+area +"<br><br><br>");

document.write("<h1> The Lifetime Supply Calculator </h1>");
var snack = "Chocolate chip";
var currentAge = 15;
var estimatedAge = 65;
var snackPerDay = 3;
var snackNeed = (65-15)*3;

document.write("Favorite Snack : "+snack+"<br>");
document.write("Current age : "+ currentAge +"<br>");
document.write("Estimated Maximum Age :"+ estimatedAge +"<br>");
document.write("Amount of snacks per  day :"+ snackPerDay +"<br>");
document.write("You will need :"+snackNeed +"chocholate chip to last you until the ripe old age of"+estimatedAge+"<br><br><br>");

//******************* chapter 6-9 **********
var a =10;
document.write("Result:"+"<br>");
document.write("The value of a is : " + a+"<br>");
document.write("............................"+"<br>");
++a;
document.write("The value of ++a is : " + a+"<br>");
document.write("Now the value of a is : " + a+"<br>");
++a;
document.write("The value of ++a is : " + a+"<br>");
document.write("Now the value of a is : " + a+"<br>");
--a;
document.write("The value of --a is : " + a+"<br>");
document.write("Now the value of a is : " + a+"<br>");
--a;
document.write("The value of --a is : " + a+"<br>");
document.write("Now the value of a is : " + a+"<br><br><br>");

var a = 2, b = 1;
document.write("a is : " + a +"<br>");
document.write("b is : " + b +"<br>");
var result = --a - --b + ++b + b--;
document.write("result is : " + result +"<br><br><br>");

//Explanation on every step
// --a; 
// predecrement(a=1)
// --a - --b;
// predecrement(b=0)
// --a - --b + ++b;
// preIncrement (b=1)
// --a - --b + ++b + b--;
// postdecrement(b=1)
//--a(a=1) - --b(b=0) + ++b(b=1) + b--(b=1);
//1-0+1+1
//result=3

var name = prompt("Enter name","enter your full name");
alert("Welcome " + name);

var num = +prompt("Enter number","Enter any number for Multiplication Table");
for(var i=1; i<=10 ;i++)
{
    document.write(num + "X" + i + "=" + num*i + "<br>")
} 
document.write("<br><br><br>");

var subject1 = prompt("Enter First Subject Name ");
var subject2 = prompt("Enter Second Subject Name ");
var subject3 = prompt("Enter Third Subject Name ");
var totalmark = 100;
var numSub1 = +prompt("Enter First Subject Obtained number ");
var numSub2 = +prompt("Enter Second Subject Obtained number ");
var numSub3 = +prompt("Enter Third Subject Obtained number ");
var grandTotal = totalmark*3;
var totalObt = numSub1+numSub2+numSub3;
var avgPerc = (totalObt/3);

document.write("<table><tr><th>Subject</th> " + "<th>Total Marks</th> " + "<th>Obtained Marks</th>  "+ "<th>Percentage</th></tr>" );
document.write("<tr><td>"+subject1 + "</td><td> " + totalmark + "</td><td> " + numSub1 +"</td><td> "+ numSub1 + "% </td></tr>");
document.write("<tr><td>"+subject2 + "</td><td> " + totalmark + " </td><td>" + numSub2 +" </td><td>"+ numSub2 + "%</td></tr>");
document.write("<tr><td>"+subject3 + " </td><td>" + totalmark + "</td><td> " + numSub3 +"</td><td> "+ numSub3 + "%</td></tr>");
document.write("<tr><td></td>" + "<th> " + grandTotal + "</th><th> " +totalObt  +"</th><th> "+ avgPerc + "% </th></tr></table>");



//************* chapter 9-11 ************

var city = prompt("Enter city name:","karachi")
if(city = "karachi" || "Karachi" || "KARACHI" ){
alert("Welcome to City of Light");
}




var gender = prompt("Enter gender:","enter male or felmale")
if(gender === "male" )
{
alert("Good morning Sir");
}
else if(gender === "female")
{
alert("Good morning Maam");

}
else{
alert("Good morning");

}




var color = prompt("Enter color of trafic light","enter red, yellow or green");
if(color === "red")
{
   alert("Must stop"); 
}
else if(color === "yellow")
{
   alert("Ready to move"); 
}
else if(color === "green")
{
   alert(" Move now"); 
}
else
{
   alert("only red, yellow and green"); 
}



var fuel = +prompt("Enter Remaining fuel","enter value between 0 - 1 ")

if(0.25 > fuel){
    alert("Please refill the fuel in your car");   
}
if(0.25 <= fuel){
    alert("You fuel is greater than low level ");   
}




var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}


var tMarksobtained = +prompt("enter total marks obtained","enter value in number");
var tMarks = +prompt("enter total Marks","enter value in number");
var percent = (tMarksobtained/tMarks)*100;
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks : " + tMarks + "<br>");
document.write("Total Obtained : " + tMarksobtained  + "<br>");
document.write("Percentage : " + percent  + "%<br>");

if(80 <= percent )
{
document.write("Grade : A - one" + "<br>"  );
document.write("Remarks : Exellent " + "<br>"  );
}
else if(70 <= percent )
{
document.write("Grade : A " + "<br>" );
document.write("Remarks : Good " + "<br>"  );
}
else if(60 <= percent )
{
document.write("Grade : B " + "<br>");
document.write("Remarks : You need to improve "  + "<br>");
}
else if(60 > percent )
{
document.write("Grade : Fail " + "<br>");
document.write("Remarks : Sorry "  + "<br>");
}

var secretNum = 4;
var usernum = +prompt("Guess Secret number","Enter number between 1 - 10")
if(secretNum === usernum )
{
    alert("“Bingo! Correct answer”");
} 
else if(++secretNum === usernum )
{
    alert("“Close enough to the correct answer”");
} 
else
{
    alert("Try Later");

}




var checkDiv = +prompt("enter number","enter number to check divisible by 3");
var mod = checkDiv%3;

if(mod === 0)
{
    alert("Your number is divisible by 3");
}
else
{
    alert("Your number is not divisible by 3");

}


var checkEvenOdd = +prompt("enter number","enter number to check even or odd");
var even = checkEvenOdd%2;
var odd = checkEvenOdd%3;

if(even === 0)
{
    alert("Your number is even");
}
else if(odd === 0)
{
    alert("Your number is odd");
}
else
{
    alert("Your value is not form even or odd");

}



var temper = +prompt("Enter number","Enter Temperature in number and know situation of wheather");

if(temper>40)
{
    alert("It is too hot outside");
}
else if(temper>30)
{
    alert("The Weather today is Normal");
}
else if(temper>20)
{
    alert("Today Weather is cool");
}
else if(temper>= 10||temper< 10)
{
    alert("OMG! TOday's weather is so Cool");
}




var number1 = +prompt("Enter number1 :");
var number2 = +prompt("Enter number2 :");
var operator = prompt("enter operator :","+ or - or * or / or %")

if(operator == "+")
{
    var result = number1+number2;
    alert("Result = "+ result)
}
else if(operator == "-")
{
    var result = number1-number2;
    alert("Result = "+ result)
}
else if(operator == "/")
{
    var result = number1/number2;
    alert("Result = " + result)
}
else if(operator == "*")
{
    var result = number1*number2;
    alert("Result = "+ result)
}
else if(operator == "%")
{
    var result = number1%number2;
    alert("Result = "+ result)
}
//*********************** chapter 12- 13*************

var capA = 65;
var capZ = 90; 
var a = 97;
var z = 122;
x = +prompt("Enter number : ", "ASCII codes:- A=65, Z=90,a=97,z=122")
if ( x === 97)
{
    alert("Lower case letter");
}
else if ( x === 90)
{
    alert("Upper case letter");
}
else if ( x === 65)
{
    alert("lower case letter");
}
else if ( x === 122)
{
    alert("lower case letter");
}

var q = +prompt("Enter number","Enter first integar");
var v = +prompt("Enter number","Enter  Second integar");
document.write("<h1>First  Number = "+ q +"</h1>");
document.write("<h1>Second Number = "+ v +"</h1>");
if(q===v){
    document.write("both integar are equal"); 
}

var num = +prompt("Enter number");
if(num < 0){
    document.write("The number is  Negative");
}
else if(num > 0){
    document.write("The number is  Positive");

}
else if(num === 0 ){
    document.write("The number is  Zero");
}

var alpha = prompt("Enter any Alphabet ","Check you input is vowel or not");
if(alpha === "a")
{
    alert("true");
}
else if(alpha === "e")
{
    alert("true");
}
else if(alpha === "i")
{
    alert("true");
}
else if(alpha === "o")
{
    alert("true");
}
else if(alpha === "u")
{
    alert("true");
}
else
{
    alert("false");
}


var enteredPassword = prompt("enter password");
var userpassword = "abc";
if(enteredPassword === userpassword){
    alert("Correct! The password you entered matches the origninal password ");
}
else if(enteredPassword === ""){
    alert("Please Enter passsword");
}
else{
    alert("Incorrect Password")
}


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}



var time = +prompt("Enter format time in 24hr format","enter value between 1-24");
if(time === 1)
{
    alert("1 am");
}
else if(time === 2)
{
    alert("2 am");
}
else if(time ===  3)
{
    alert("3 am");
}
else if(time ===  4)
{
    alert("4 am");
}
else if(time ===  5)
{
    alert("5 am");
}
else if(time ===  6)
{
    alert("6 am");
}
else if(time ===  7)
{
    alert("7 am");
}
else if(time ===  8)
{
    alert("8 am");
}
else if(time ===  9)
{
    alert("9 am");
}
else if(time ===  10)
{
    alert("10 am");
}
else if(time ===  11)
{
    alert("11 am");
}
else if(time ===  12)
{
    alert("12 pm");
}
else if(time ===  13)
{
    alert("1 am");
}
else if(time ===  14)
{
    alert("2 am");
}
else if(time ===  15)
{
    alert("3 am");
}
else if(time ===  16)
{
    alert("4 am");
}
else if(time ===  17)
{
    alert("5 am");
}
else if(time ===  18)
{
    alert("6 am");
}
else if(time ===  19)
{
    alert("7 am");
}
else if(time ===  20)
{
    alert("8 am");
}
else if(time ===  21)
{
    alert("9 am");
}
else if(time ===  22)
{
    alert("10 am");
}
else if(time ===  23)
{
    alert("11 am");
}
else if(time ===  24)
{
    alert("12 am");
}
else
{
    alert("enter value between 1-24");
}


// ****************** chapter 14 - 16 ************

var studentName = [];

var studentName = new Array();


var x = ["a","b","c"];

var y = [1,2,3];

var z = [true,false];

var q = [1,"a",true];

var z = ["SSC","HSC","BCS","BS","B.COM","MS","M.PHIL","PHD"];


document.write("Qualifications:" + "<br>");
document.write("1)"+ z[0] + "<br>");
document.write("2)"+ z[1] + "<br>");
document.write("3)"+ z[2] + "<br>");
document.write("4)"+ z[3] + "<br>");
document.write("5)"+ z[4] + "<br>");
document.write("6)"+ z[5] + "<br>");
document.write("7)"+ z[6] + "<br>");
document.write("8)"+ z[7] + "<br>");



var student=["Michael","John","Tony"];
var tmarks = 500;
var studentMarks = [320,230,480];
document.write("Score of " + student[0] +" is " +studentMarks[0]+". Percentage : " + (studentMarks[0]/tmarks*100)+"%" +"<br>");
document.write("Score of " + student[1] +" is " +studentMarks[1]+". Percentage : " + (studentMarks[1]/tmarks*100)+"%" +"<br>");
document.write("Score of " + student[2] +" is " +studentMarks[2]+". Percentage : " + (studentMarks[2]/tmarks*100)+"%" +"<br>");

var colorNames = [];
var i = 0;
colorNames[i++] = prompt("Enter color name add in begining of array");
document.write("Color name in begining of array : " + colorNames[0] + "<br>");
colorNames.push( prompt("Enter color name add in end of array"));
var endofarray = colorNames.length-1;
document.write("Color name in end of array : " + colorNames[endofarray] + "<br>");
colorNames[i++] = prompt("Enter color name add in begining of array");
colorNames[i++] = prompt("Enter color name add in begining of array");
for(j=0;j<colorNames.length;j++)
{
document.write("Color name in index"+j+"  of array : " + colorNames[j] + "<br>");
}
colorNames.shift();
for(j=0;j<colorNames.length;j++)
{
document.write("Color name in index"+j+"  of array  after delete of last: " + colorNames[j] + "<br>");
}

var colorNamesAdd =+prompt("Enter Index number in which Color name want to add","enter Index number");
colorNames[colorNamesAdd] = prompt("Enter Color name want to add in desired index","Enter Color name");

for(j=0;j<colorNames.length;j++)
{
document.write("Color name in index"+j+"  of array  after add desired index " + colorNames[j] + "<br>");
}

var deleteColor =+prompt("enter index number which you  want to delete ") ;
delete colorNames[deleteColor];
for(j=0;j<colorNames.length;j++)
{
document.write("Color name in index"+ j +"  of array  after delete desired index " + colorNames[j] + "<br>");
}

var scoreOfStudent = [320,230,480,120];
 scoreOfStudent.sort();
document.write("Arranged student score Ascending order = " +  scoreOfStudent.sort());

 var city = ["Karachi", "Lahore","Islamabad","Quetta","Peshawar"];
 var selectedCity = ["Islamabad","Quetta"];
 for(j=0;j<city.length;j++)
 {
 document.write(city[j]+",");
  }
  document.write("<br>");
  for(j=0;j<selectedCity.length;j++)
 {
 document.write(selectedCity[j]+",");
  }

var arr = ["This", "is" , " my" , " cat"];
document.write("arry = "+arr +"<br>");

document.write("arry after join = " + arr.join(" and "));

var store = ["keyboard","mouse","printer","monitor"];
document.write("Devices: <br>")
for(j=0;j<store.length;j++)
 {
 document.write( store[j] + "," );
  }
  document.write("<br><br><br>")
  for(j=0;j<store.length;j++)
 {
 document.write("Out: <br>" + store[j] + "<br>");
  }

var phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
for(j=0;j<phones.length;j++)
 {
    document.write(phones[j]+ "<br>");
  }
  //****************** chapter 17 - 20 ************
  var arr = [[],[]];

var mArrayMatrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for (var i = 1;i<=10;i++)
{
    document.write(i + "<br>");
}

document.write("<br><br>");

var j =+prompt("Enter a number to show its multiplication table");
var k =+prompt("Enter a number to show its multiplication table length");

for(var i=1;i<=k;i++)
{
    document.write(j + " X " + i + " = " + j*i + "<br>"); 
}

document.write("<br><br>");

var fruits = ["apple","banana","mango","orange","strawberry"]
for(var i=0;i<fruits.length;i++)
{
    document.write("Element at index "+i+" is "+fruits[i] + "<br>"); 
}

document.write("<br><br>");
document.write("Counting: "); 

for(var i=1;i<=15;i++)
{
    document.write(i+","); 
}
document.write("<br>");

document.write(" Reverse counting: "); 

for(var i=10;i>=1;i--)
{
    document.write(i+","); 
}

document.write("<br>");

document.write("Even: "); 
for(var i=0;i<=20;i++)
{
    var k = i%2;
    if(k === 0){
    document.write(i+",");
    } 
}

document.write("<br>");

document.write("Odd: "); 
for(var i=0;i<=20;i++)
{
    var k = i%2;
    if(k != 0){
    document.write(i+",");
    } 
}


document.write("<br>");

document.write("Series: "); 
for(var i=2;i<=20;i++)
{
    var k = i%2;
    if(k === 0){
    document.write(i+"k,");
    } 
}



var bakery = ["cake","apple pie","cookie","chips","patties"];
var userDemand = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ","Example : cookie");
for(var i=0;i<bakery.length;i++){
    if (userDemand == bakery[i])
    {

        var found = true;
        var d = i;
        break;
    }

}
if(found == true){
        document.write(userDemand + " is <b> available </b> at index " + d + " in our bakery");
}
else if(found != true)
{
 document.write("We are sorry."+ userDemand + " is <b>not available</b> in our bakery");
   
}


var maxNum = [24, 53, 78, 91, 12];
var mn =Math.max(...maxNum);
document.write("Array item: 24, 53, 78, 91, 12 <br> The largest number is " + mn + "<br>");


var maxNum = [24, 53, 78, 91, 12];
var mn =Math.min(...maxNum);
document.write("Array item: 24, 53, 78, 91, 12 <br> The Smallest number is " + mn + "<br>");



for(var i=1;i<=20;i++)
 {
     document.write( 5*i + ","); 
 }