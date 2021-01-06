// *******************chapter 1**************
//Q1
alert("welcome");

//Q2
alert("Error! Please enter a valid password.")

//Q3
alert("Welcome to JS Land... \n Happy Coding!");

//Q4
alert("Welcome to JS Land");
alert("Happy Coding!");

//Q5
console.log("Hello... I can run JS through my web browser's console");

//Q6
alert("alert on new file");



// *******************chapter 2**************
 //Q1
var username;

//Q2
var myName = "John Doe";

//Q3
var message = "Hello World"
alert(message);

//Q4
var studentName = "Jhone Doe";
var studentAge = 15 +" years old";
var studentCourse = "Ceritfied Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);

//Q5
alert(" PIZZA \n PIZZ \n PIZ \n PI \n P")

// Q6
var email = "example@example.com";
alert("My email address is " + email);

// Q7 
var book = "A smarter way to learn JavaScript";
 alert("I am trying to learn from the Book " + book );
 
//  Q8
document.write("Yah! I can write HTML content through JavaScript")

// Q9
var x = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(x);

// *******************chapter 3**************
// Q1
var age = 15;
alert("I am " + age + " years old");

// Q2
var visit = 14;
alert("You have visited this site " + visit + " times")

//Q3
var myBirthYear = 1999;
document.write("My birth year is " + myBirthYear + "<br /> Data type of my ddeclared variable is number" + "<br>" );

// Q4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<b>"+visitorName+ " </b> ordered <b> " +quantity +" " +productTitle + "</b>(s) on XYZ Clothing store”." );

// **************Chapter4*****************
// Q1
var firstName = "John";
var middleName = "Carter";
var Last_name ="Doe";
document.write("My full name is "+ firstName + middleName + Last_name );

// Q2
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

// Q3
document.write("<h1>Rules for naming JS variable</h1> ");
document.write(" <br> Variable names can only contain number,letter,dollarsign($) and underscore(_).");
document.write("<br> Variables must begin with a letter,dollarsign($) and underscore(_).");
document.write("<br> Variable names are case sensetive");
document.write("<br> Variable names should not be JS Keyword");


// **************CHAPTER 5 *************
//Q1
var a = 3 ;
var b = 5 ;
var c = a + b;
document.write("Sum of "+ a +" and " + b + " is " + c + "<br>");

// Q2
var d = a-b;
document.write("Subtraction of "+ a +" and " + b + " is " + d + "<br>");

var e = a*b;
document.write("Multiplication of "+ a +" and " + b + " is " +  e + "<br>");

var f = a/b;
document.write("divsion of "+ a +" and " + b + " is " + f + "<br>");

var g = a%b;
document.write("divsion of "+ a +" and " + b + " is " + g + "<br><br><br>");

// Q3
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

// Q4
var cost = 600;
var quantity = 5;
var totalCost = cost*quantity; 
document.write( "Total cost to buy "+quantity+" tickets to a movie is "+ totalCost + "PKR" + "<br><br><br>");

// Q5
var a = 4;
document.write("Table of " + a +"<br>")
for(i = 1; i <= 10; i++)
{

    document.write(a + "x" + i + "=" + a*i + "<br>");
}
document.write("<br><br>");

// Q6
var tempCelsius = 25;
 var d = (tempCelsius*(9/5))+32;
 document.write(tempCelsius+"℃ is "+ d + "℉"+ "<br>");
 var tempFahrenheit = 70;
 var e = (tempFahrenheit-32)*5/9;
 document.write(tempFahrenheit+"℉ is "+ e + "℃" + "<br><br><br>");

//  Q7
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

// Q8
var totalMarks = 980 ;
var marksObtained = 804 ;
var percentage = (marksObtained/totalMarks)*100;
document.write("<h1>Mark Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "% <br><br>");

// Q9
document.write("<h1>Currency in PKR</h1>");
var oneUsDollar = 104.80;
var oneSaudiRiyal = 28;
var totalCurrency = (10*oneUsDollar) + (25*oneSaudiRiyal);
document.write("Total Currency in PKR:" + totalCurrency +"<br> <br>");

// Q10
var num = 10;
document.write("Calculation in Single line = " + ((num+5)*10)/2 +"<br> <br>" );

//Q11
document.write("<h1>The Age Calculator</h1>");
var currentYear = 2021;
var birthYear = 1999;
var age = currentYear - birthYear;
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth Year: "+birthYear+"<br>");
document.write("Your Age is: "+age+"<br><br><br>");

// Q12
document.write("<h1>The Geometrizer</h1>");
var radius = 20;
var circumference = 2*(3.142)*radius;
var area = (3.142)*radius*radius;
document.write("Radius of a circle"+radius+"<br>");
document.write("The circumference is :" +circumference+"<br>");
document.write("The area is :"+area +"<br><br><br>");

// Q13
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
// Q1
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

// Q2
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

// Q3
var name = prompt("Enter name","enter your full name");
alert("Welcome " + name);
//Q4 NOT ON ASSIGNMENT
// Q5
var num = +prompt("Enter number",'5');
for(var i=1; i<=10 ;i++)
{
    document.write(num + "X" + i + "=" + num*i + "<br>")
} 
document.write("<br><br><br>");

// Q6
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
// Q1
var city = prompt("Enter city name:","karachi")
if(city = "karachi"){
alert("Welcome to City of Light");
}


// Q2
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



// Q3
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


// Q4
var fuel = +prompt("Enter Remaining fuel","0.24")
if(0.25 > fuel){
    alert("Please refill the fuel in your car");   
}

// Q5
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

// Q6

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

// Q7
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



// Q8
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


// Q9
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



// Q10
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


// Q11

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

// Q1
var char = prompt("Enter a charachter");
if(char.charCodeAt() >= 65 && char.charCodeAt()<=90){
    alert("UPPER CASE");
}
else if(char.charCodeAt() >= 97 && char.charCodeAt()<=122)
{
    alert("LOWER CASE");

}
//Q2
var q = +prompt("Enter number","Enter first integar");
var v = +prompt("Enter number","Enter  Second integar");
if(q>v){
    document.write(q); 
}
else if(q<v){
    document.write(v); 
}
else if(q===v){
    document.write("both integar are equal"); 
}

//Q3
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
//Q4
var alpha = prompt("Enter any Alphabet ","Check you input is vowel or not");
if(alpha === "a"||alpha === "e"||alpha === "i"||alpha === "o"||alpha === "u")
{
    alert("true");
}
else
{
    alert("false");
}

// Q5
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

//Q6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}

//Q7

var time = +prompt("Enter format time in 24hr format","Example:1900 ");
if(time >=0000 && time < 1200)
{
    alert("Good Morning!");
}
else if(time >= 1200 && time < 1700)
{
    alert("Good Afternoon!");
}
else if(time >= 1700 && time < 2100)
{
    alert("Good Evening!");
}
else if(time >= 2100 && time <= 2359)
{
    alert("Good Night!");
}


// ****************** chapter 14 - 16 ************

//Q1
var studentName = [];

//Q2
var studentName = new Array();

//Q3
var x = ["a","b","c"];

//Q4
var y = [1,2,3];

//Q5
var z = [true,false];

//Q6
var q = [1,"a",true];

//Q7
var eduInPk = ["SSC","HSC","BCS","BS","B.COM","MS","M.PHIL","PHD"];


document.write("Qualifications:" + "<br>");
document.write("1)"+ eduInPk[0] + "<br>");
document.write("2)"+ eduInPk[1] + "<br>");
document.write("3)"+ eduInPk[2] + "<br>");
document.write("4)"+ eduInPk[3] + "<br>");
document.write("5)"+ eduInPk[4] + "<br>");
document.write("6)"+ eduInPk[5] + "<br>");
document.write("7)"+ eduInPk[6] + "<br>");
document.write("8)"+ eduInPk[7] + "<br>");


//Q8
var student=["Michael","John","Tony"];
var tmarks = 500;
var studentMarks = [320,230,480];
document.write("Score of " + student[0] +" is " +studentMarks[0]+". Percentage : " + (studentMarks[0]/tmarks*100)+"%" +"<br>");
document.write("Score of " + student[1] +" is " +studentMarks[1]+". Percentage : " + (studentMarks[1]/tmarks*100)+"%" +"<br>");
document.write("Score of " + student[2] +" is " +studentMarks[2]+". Percentage : " + (studentMarks[2]/tmarks*100)+"%" +"<br>");

//Q9
var colorNames = [];
//a
var i=0;
colorNames[i] = prompt("Enter color name add in begining of array");
document.write("Color name in begining of array : " + colorNames[i] + "<br>");
//b
colorNames.push( prompt("Enter color name add in end of array"));
var endofarray = colorNames.length-1;
document.write("Color name in end of array : " + colorNames[endofarray] + "<br>");
 //c
colorNames.unshift(prompt("Enter color name add in begining of array"),prompt("Enter color name add in begining of array"))
for(j=0;j<colorNames.length;j++)
{
document.write("Color name in index"+j+"  of array : " + colorNames[j] + "<br>");
}
//d
colorNames.shift();
for(j=0;j<colorNames.length;j++)
{
document.write("Color name in index"+j+"  of array  after delete of first: " + colorNames[j] + "<br>");
}

//e
colorNames.pop();
for(j=0;j<colorNames.length;j++)
{
document.write("Color name in index"+j+"  of array  after delete of last: " + colorNames[j] + "<br>");
}
//f
var colorNamesAdd =+prompt("Enter Index number in which Color name want to add","enter Index number");
colorNames[colorNamesAdd] = prompt("Enter Color name want to add in desired index","Enter Color name");

for(j=0;j<colorNames.length;j++)
{
document.write("Color name in index"+j+"  of array  after add desired index " + colorNames[j] + "<br>");
}

//g

var deleteColor =+prompt("enter index number which you  want to delete ") ;
var deleteColorqty =+prompt("enter how many color you  want to delete ") ;
colorNames.splice(deleteColor,deleteColorqty)
for(j=0;j<colorNames.length;j++)
{
document.write("Color name in index"+ j +"  of array  after delete desired index " + colorNames[j] + "<br>");
}

//Q10
var scoreOfStudent = [320,230,480,120];
 scoreOfStudent.sort();
document.write("Arranged student score Ascending order = " +  scoreOfStudent.sort());

//Q11
 var city = ["Karachi", "Lahore","Islamabad","Quetta","Peshawar"];
 var selectedCity = city.slice(2,4)
 document.write("Cities list : ");
 for(var i=0;i<city.length;i++)
{
 document.write(city[i]+",");
}
document.write("<br>" + "Selected list : ");
for(var i=0;i<selectedCity.length;i++)
{
 document.write(selectedCity[i]+",");
}
//Q12
var arr = ["This", "is" , " my" , " cat"];
document.write("arry = "+arr +"<br>");

document.write("arry after join = " + arr.join(" "));

//Q13
var store = ["keyboard","mouse","printer","monitor"];
document.write("Devices: <br>")
for(var j=0;j<store.length;j++)
 {
 document.write( store[j] + "," );
  }
  document.write("<br><br><br>")
  for(var b=1;b<=store.length;b+2)
 {
     var out = store.shift();
 document.write("Out: <br>" +  out + "<br>");
  }

//Q14
var store = ["keyboard","mouse","printer","monitor"];
document.write("Devices: <br>")
for(var j=0;j<store.length;j++)
 {
 document.write( store[j] + "," );
  }
  document.write("<br><br><br>")
  for(var b=1;b<=store.length;b+2)
 {
     var out = store.pop();
 document.write("Out: <br>" +  out + "<br>");
  }

//Q15
 var phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select>");
document.write("<option>"+phones[0]+"</option>");
document.write("<option>"+phones[1]+"</option>");
document.write("<option>"+phones[2]+"</option>");
document.write("<option>"+phones[3]+"</option>");
document.write("<option>"+phones[4]+"</option>");
document.write("<option>"+phones[5]+"</option>");
document.write("</select>");


  //****************** chapter 17 - 20 ************
//Q1
  var arr = [[],[]];

//Q2
var mArrayMatrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for (var i = 0;i<mArrayMatrix.length;i++)
{
  document.write(mArrayMatrix[i] +"<br>");
    
}

document.write("<br><br>");

//Q3
for(var i=1; i<=10;i++)
{
    document.write(i +"<br>");
}

//Q4
var j =+prompt("Enter a number to show its multiplication table");
var k =+prompt("Enter a number to show its multiplication table length");
document.write("Multiplication table of " + j + "<br>");
document.write("Lenght " + k + "<br>");

for(var i=1;i<=k;i++)
{
    document.write(j + " X " + i + " = " + j*i + "<br>"); 
}

document.write("<br><br>");

//Q5
var fruits = ["apple","banana","mango","orange","strawberry"]
for(var i=0;i<fruits.length;i++)
{
    document.write(fruits[i] + "<br>"); 
}
document.write("<br>");
for(var i=0;i<fruits.length;i++)
{
    document.write("Element at index "+i+" is "+fruits[i] + "<br>"); 
}

document.write("<br><br>");

//Q6
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


//Q7
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

//Q8
var maxNum = [24, 53, 78, 91, 12];
var mn = 0;
document.write("Array item: 24, 53, 78, 91, 12 <br> The largest number is ");
for(var i = 0;i<maxNum.length;i++)
{  if(mn<maxNum[i]){
     mn =maxNum[i];
}
}
document.write(mn);

//Q9
var maxNum = [24, 53, 78, 91, 12];
var mn = maxNum[0];
document.write("Array item: 24, 53, 78, 91, 12 <br> The Smallest number is ");
for(var i =0 ;i<maxNum.length;i++)
{  if(mn>maxNum[i]){
     mn =maxNum[i];
}
}
document.write(mn);


//Q10
for(var i=1;i<=20;i++)
 {
     document.write( 5*i + ","); 
 }