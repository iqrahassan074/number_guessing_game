#!/usr/bin/evn node
import inquirer from "inquirer"
// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input for computer generated number and show result

const randomnumber = Math.floor(Math.random() * 10 + 1)



const answers = await inquirer.prompt([
    {
        name: "userguessingnumber",
        type: "number",
        message: "please guess a random number between 1-10",
    },
]);
console.log(answers);

if(answers.userguessingnumber === randomnumber){
    console.log("congratulations! you guessed right number");   
} else {
    console.log("you guessed wrong number");
    
}
