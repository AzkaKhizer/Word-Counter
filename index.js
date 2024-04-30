#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n \t\t Welcome to Code With Azka - Words Counter "));
console.log("=".repeat(80));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Type a Sentence:",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(80));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n- Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(80));
