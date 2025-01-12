/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

//==========================================================================================================================

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(Adult){
if (Adult > 17) {
 return ('Adult');
   
}
else if (Adult < 18); {
    return ('Minor');
}
} 

console.log('Exercise 2 Result:', isAdult(18));

//Exercise 2 Summary: "17 > Adult" shows that 17 does not mean Adult which is why Adult is greater than 17 which
//Translates to Adult. As for else if, 18 is Greater which means anything less than 18
//Will translate to Minor
/*

//==========================================================================================================================

Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(Vowel){
    if (Vowel === 'A') {
     return ('True');
     
       
    }
    else if (Vowel === 'E') {return ('True');}
    else if (Vowel === 'I') {return ('True');}
    else if (Vowel === 'O') {return ('True');}
    else if (Vowel === 'U') {return ('True');}
    else 
        return ('False');
    }
    
console.log('Exercise 3 Result:', isCharAVowel("A")); 
//Exercise 3 Summary: Written all the Vowels since it's only 5, all of which means anything that isn't part of the
//Return true will be written as false.
/*

//==========================================================================================================================

Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name , domain){
    // if ('name') <--- Not necessary to use.
        return (name + '@' + domain);

}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

//Exercise 4 Summary: Putting the parameter in function and whatever you label in console.log will label the parameter.
// Added @ since it won't be a complete email.
/*

//==========================================================================================================================

Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(Sam, day) {
    // if (day = 'morning'); - Possible mistake
    return ('Good ' + day) + (', ' + Sam + '!'); 
  
    //     else if (day = 'night');  - Unnecessary Code
    // return ('Good ' + day + ', ' + Sam + '!'); { Unnecessary Code
}

// function greetUser(Sam, day) { Unnecessary Code
//     if (day = 'afternoon');{} Unnecessary Code
//      return ('Good ' + day + ', ' + Sam + '!') Unnecessary Code
// }

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
// Exercise 5 Summary: No need to add "If", and instead just keep return. The parameter has already been said
// So adding a day like "Morning" or "Night" will take the label the day as that in console log
// Which is why parameter of day will be written so that it can label it as morning/night by the console log
// While keeping the rest in customs words like "Good "

/*

//==========================================================================================================================

Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(numA, numB, numC) {
 if (numA >= numB ){
    return (numA);}
else if (numB >= numC){
    return (numB)}
else if (numC >= numA){
    return (numC)}
else if (numB >= numA){}

    
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
/*
//Exercise 6 Summary: ">=" is greater than or equal to, finding largest number using it will be very easy.
// And the one to use to find the largest number

//==========================================================================================================================


Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(amount , percentage) {return (amount % percentage)}
console.log('Exercise 7 Result:', calculateTip(50, 20));

//Exercise 7 Summary: Amount for the cash and percentage for the percentage. Returning the percentage with the 
// "%" symbol.


/*

//==========================================================================================================================

Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/


function convertTemperature(Number , temperature)
{if (temperature === 'F'){
    return (Number - 32)* 5/9;}
    else if (temperature === 'C')
    return (Number * 9/5) + 32; 
}


 console.log('Exercise 8 Result:', convertTemperature(32, "C"));

 // Exercise 8 Summary: Needed two Parameter, one for the number and one for the C and F.
 // In the If statement, it's labelling the temperature in that as F so it'll return it as Fahreignheit
 // Same with Celcius, and the equation needed that can do the conversion.




/*

//==========================================================================================================================

Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num , numB , equation) {
   
    if (equation === 'subtract') {return(num-numB);}
    else if (equation === 'add') {return (num+numB);} 
    else if (equation === 'multiply'){return(num*numB);} 
    else if (equation === 'divide'){return(num/numB);}
    else return "Equation Not Found"
     
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));

//Exercise 9 Summary: Instead of putting all the equations in the parameter, just put 
// one equation for all the equations, and two for numbers. Or else it'll be undefined
//Labeling what the equation is going to be will do it for you
