// CHANGING CASE
// TASK 1

// var user= prompt("Enter any words")
// var capital= user.toUpperCase()
// document.write(capital+"<br>");

// TASK 2


// Strings: measuring length and extracting parts
// TASK 1

// var user= prompt("Enter your favourite  mobile phone model")
// var len= user.length
// document.write("The length of user input is: "+len+"<br>");

// TASK 2

// var user= prompt("Enter any string")
// var lastCharacter = user.slice(-1)
// document.write(lastCharacter+"<br>");

// Strings: finding segments
// TASK 1

// var word= "Pakistani"
// for(var i=0; i<=word.length; i++);
// if(word=="n"){
//     document.write(i+"<br>")
// }else{
//     document.write("not match")
// }

// TASK 2

// var user= prompt("Enter your username")
// if(user=="!"){
//     document.write("Enter valid username"+"<br>");
// }else if(user=="@"){
//     document.write("Enter valid username"+"<br>");
// }else{
//     document.write("Your username is good"+"<br>")
// }


// Strings: finding a character at a location
// TASK 1

// var word="Pakistani"
// document.write("The character at third index is: "+word[3]+"<br>");

// Strings: replacing characters
// TASK 1

// var word= "Hyderabad"
// var output= word.replace("Hyder","Islam")
// document.write(output+"<br>");

// TASK 2

// var sentence= "asdsf and asdsdf and jiv hcd and and dhugeu"
// var output= sentence.replaceAll("and","&")
// document.write("All and is replaced by &: " + output+"<br>");

// var message = "Ali and Sami are best friends. They play cricket and football together"
// var output= message.replaceAll("and","&")
// document.write("All and is replaced by &: " + output+"<br>");

// Rounding numbers
// // TASK 1

// // a
// var number= +prompt("Enter any positive number")
// document.write("number is: "+number+"<br>")

// // b
// var roundValue= Math.round(number)
// document.write("round value is: "+roundValue+"<br>");

// // c
// var floorValue= Math.floor(number)
// document.write("floor value is: "+floorValue+"<br>");

// // d
// var ceilValue= Math.ceil(number)
// document.write("ceil value is: "+ceilValue+"<br>");


// TASK 2

// a
// var number= +prompt("Enter any negative number")
// document.write("number is: "+number+"<br>")

// // b
// var roundValue= Math.round(number)
// document.write("round value is: "+roundValue+"<br>");

// // c
// var floorValue= Math.floor(number)
// document.write("floor value is: "+floorValue+"<br>");

// // d
// var ceilValue= Math.ceil(number)
// document.write("ceil value is: "+ceilValue+"<br>");


// Generating random numbers
// TASK 1

// var dice= Math.floor(Math.random()*6)
// document.write("Your value in dice is: "+dice);

// TASK 2


// var toss= Math.ceil(Math.random()*2)
// document.write(toss+"<br>");
// if(toss==1){
//     document.write("This is a Tail")
// }else if(toss==2){
//     document.write("This is a Head")
// }

// TASK 3

// var secretNumber= 7
// var user= prompt("Enter the secret number between 1 and 10")
// if(user==secretNumber){
//     document.write("Congratulations! You are correct")
// }else{
//     document.write("Try Again")
// }

// or

// var secretNumber= Math.floor(Math.random()*11)
// var user= prompt("Enter the secret number between 1 and 10")
// if(user==secretNumber){
//     document.write("Congratulations! You are correct")
// }else{
//     document.write("Try Again")
// }


// Converting strings to integers and decimals
// TASK 1

// var user=  parseFloat(prompt("Enter your weight"))
// document.write(user+" kilograms"+"<br>");

// Converting strings to numbers, numbers to strings
// TASK 1

// var str="472"
// var output= parseInt(str);
// document.write(output+"<br>");
// document.write("Data type is: "+ typeof(output));

// TASK 2

// var num=35.36
// var output= num.toString();
// document.write(output+"<br>");
// document.write("Data type is: "+ typeof(output)+"<br>");
// document.write("The dot is removed as you can see : "+ output.replace(".",""));


// Controlling the length of decimals
// TASK 1

// var percentage = 30 / 45 * 100;
// document.write("Percentage is: "+ percentage+"<br>");
// var decimalsControl= percentage.toFixed(2)
// document.write("The length of the decimals control to 2 is shown as: "+ decimalsControl);


// CHAPTER 31-34
// TASK 1

// var date= new Date()
// document.write(date);

// TASK 2

// var date= new Date()
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var output= months[date.getMonth()]
// alert("The current month is: "+ output);

// TASK 3

// var date= new Date()
// var dayOutput= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// alert("Today is: "+ dayOutput[date.getDay()]);

// TASK 4

// var date= new Date()
// var dayOutput= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
//  var output= dayOutput[date.getDay()];

//  if(output=="Sun" || output=="Sat"){
//     document.write("It's Fun Day")
//  }else{
//     document.write("Today is: "+ output)
//  }

// TASK 5

// var date= new Date()
// var dateofMonth= date.getDate()
// document.write("today's date is: "+ dateofMonth+"<br>");

// if(dateofMonth<=15){
// document.write("First fifteen days of the month")
// }else{
//     document.write("Last days of the month")
// }


// TASK 6

// var date = new Date();
// var milliSeconds = date.getTime();
// var minutes = date.getMinutes();
// var diff = milliSeconds - minutes;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);


// document.write("Current Date: " + date);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + milliSeconds);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// TASK 7

// var test= new Date()
// var hours= test.getHours()
// if(hours>=12){
// alert("It's PM")
// }else{
//     alert("It's AM")
// }

// TASK 8

// var date= new Date()
// date.setMonth(11)
// date.setDate(31)
// date.setFullYear(2020)
// date.setHours(00)
// date.setMinutes(00)
// date.setSeconds(00)

// var laterDate= date
// document.write("Later date is: "+laterDate+"<br>");

// TASK 10

// var date= new Date()
// date.setMonth(11)
// date.setDate(5)
// date.setFullYear(2015)
// var hours= date.setHours(22)
// date.setMinutes(50)
// date.setSeconds(16)


// document.write("On reference date is: "+date+"<br>");
// document.write("488091 seconds has passed since beginning of 2015"+"<br>")

// TASK 11

// var date= new Date()
// date.setMonth(11)
// date.setDate(5)
// date.setFullYear(2015)
// date.setHours(23)
// date.setMinutes(08)
// date.setSeconds(16)


// document.write("Current date is: "+date+"<br>");
// date.setHours(22);
// document.write("1 hour ago, it was: "+date+"<br>")

// TASK 12

// var date= new Date()
// date.setMonth(11)
// date.setDate(5)
// date.setFullYear(2015)
// date.setHours(23)
// date.setMinutes(09)
// date.setSeconds(37)


// document.write("Current date is: "+date+"<br>");
// date.setFullYear(1915);
// document.write("100 years back, it was: "+date+"<br>")



// TASK 13

// var age= prompt("Enter your age")
// document.write("Your age is: "+age+'<br>');
// var date= new Date()
// var currYear= date.getFullYear()

// var ageCalculate= currYear-age
// document.write("Your birth year is: "+ ageCalculate+"<br>");

// TASK 14

// document.write("<b>K-ELECTRIC BILL</b>" + "<br><br>");

// // a
// var customerName = prompt("Enter your name")
// document.write("Customer name is: "+ customerName+"<br>");

// // b
// var date = new Date()
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var currentMonth = month[date.getMonth()]
// document.write("Current month is: "+ currentMonth+"<br>");

// // c
// var numofUnits = "410"
// document.write("Number of units: "+ numofUnits+'<br>');

// // d
// var chargesPerUnit = "16"
// document.write("Charges per unit: "+ chargesPerUnit+"<br>");

// // e
// var netAmount = numofUnits * chargesPerUnit
// document.write("Net Amount Payable (within Due Date): "+ netAmount+"<br>");

// // f
// var latePayment = 350
// document.write("Late Payment Surcharge: "+ latePayment+"<br>");

// // g
// var grossAmount = netAmount + latePayment
// document.write("Gross Amount Payable (after Due Date): "+ grossAmount+"<br>");


// CHAPTER 35-38
// FUNCTIONS

// TASK 1

// function currentDateTime(){
//     var date= new Date()
//     document.write(date);
// }
// currentDateTime()

// TASK 2

// function fullNameGreet(){
//     var firstName= prompt("Enter your first name")
//     var lastName= prompt("Enter your last name")

//     var fullName= firstName +" "+ lastName
//     document.write("Welcome "+ fullName);
// }
// fullNameGreet()

// TASK 3

// function addTwoNumbers(){
//     var firstNum= +prompt("Enter first number")
//     var secondNum= +prompt("Enter second number")

//     var sum= firstNum+secondNum
//     document.write("Sum is: "+ sum);
// }
// addTwoNumbers()

// TASK 4

// function calculator(num1, num2, operator){
    
//     if(operator=="+"){
//         var c= num1+num2
//         return c;
//     }else if(operator=="-"){
//         var c= num1-num2
//         return c;
//     } else if(operator=="*"){
//         var c= num1*num2
//         return c;
//     } else if (operator=="/"){
//         var c= num1/num2
//         return c;
//     }
    
// }
// calculator(5,5,"+");


// TASK 5

// function square(num){
//     var sqr= num**2
//     document.write("Sqaure of "+ num+" is: "+ sqr);
// }
// square(7)

// TASK 6

// function factorial(num){
// var factor= 1
// if(num==0){
//     document.write("The factorial is"+ num+ "is 1")
// }
// else if(num<0){
//     document.write("The negative number does not have factorial")
// }else{
//     for(var i=1; i<=num; i++){
//         factor=factor*i
//     }
//     document.write("The factorial of given number is: "+ factor+"<br>")
// }
// }
// factorial(+prompt("Enter any number"))

// TASK 7

// function counting(){
//     var startNum= +prompt("Enter any number for starting")
//     var endNum= +prompt("Enter any number for ending")

//     document.write("Start num is: "+startNum+"<br>")
//     document.write("Ending number is: "+endNum+"<br>")

//     document.write("Counting is: "+"<br>")

//     for(var i=startNum; i<=endNum; i++){
//         document.write(i+"<br>")
//     }
// }
// counting()

// TASK 8

// function calculateHypotenous(){
//     var base= +prompt("Enter the value of base")
//     var perpendicular= +prompt("Enter the value of perpendicular")

//     document.write("The value of base is: "+base+"<BR>")
//     document.write("The value of perpendicular is: "+perpendicular+"<br>")

//     function calculateSquare(){
//         baseSquare= base**2;
//         perpSquare= perpendicular**2;

//         var hypotenous= baseSquare + perpSquare
//         var hypSquare= hypotenous**2

//         document.write("The square of base is: "+baseSquare+"<br>")
//         document.write("The square of perpendicular is: "+perpSquare+"<br>")
//         document.write("The value of hypotenous is: "+hypotenous+"<br>")
//         document.write("The square of hypotenous is: "+hypSquare+"<br>")

//     }
//     calculateSquare()
// }
// calculateHypotenous()

// TASK 9
// a

// function area(width,height){
//     var area= width*height
//     document.write("Area is: "+area+"<br>");
// }
// area(25,30)

// b

// function area(){
// var width= +prompt("Enter width")
// var height= +prompt("Enter height")
    
//     var area= width*height
//     document.write("Area is: "+area);
// }
// area()

// TASK 10

// function palindrome(){
//     var word= prompt("Enter any word for checking if it is palindrome or not")
//        var reverse= word.toString().split("").reverse().join(""); 
//     if(word==reverse){
//     document.write("its a palindrome"+"<br>");
//     }else{
//         document.write("Its not a palindrome"+"<br>")
//     }
// }
// palindrome()



// TASK 14

// function calcCircumference(radius){
    
//     circleCircumference= 2*3.142*radius
//     document.write("The circumference of circle at the given radius is: " + circleCircumference+"<br>");
// }
// calcCircumference(30)

// function calcArea(radius){

//     circleArea= 3.142* radius**2
//     document.write("The area of the circle at the given radius is: " + circleArea);
// }
// calcArea(4)