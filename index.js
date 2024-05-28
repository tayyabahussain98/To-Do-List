#! /usr/bin/env node
import inquirer from "inquirer";
const todoList = [];
async function main() {
    while (true) {
        const { choice } = await inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["Add a todo", "Remove item", "View todo list", "Exit"]
            }
        ]);
        // ADD A TODO
        if (choice === "Add a todo") {
            const { task } = await inquirer.prompt([
                {
                    type: "input",
                    name: "task",
                    message: "Enter your todo task:"
                }
            ]);
            todoList.push({ task, completed: false });
            console.log("Todo added!!");
        }
        // REMOVE ITEM
        else if (choice === "Remove item") {
            let { task } = await inquirer.prompt([
                {
                    type: "remove",
                    name: "remove item",
                    message: "Remove your item in list:"
                }
            ]);
            todoList.pop();
            console.log("Todo removed!!");
        }
        // VIEW TODO LIST
        else if (choice === "View todo list") {
            console.log("Your todo list:");
            todoList.forEach((todo, index) => {
                console.log(`${index + 1}. [${todo.completed ? "x" : ""}] ${todo.task}`);
            });
        }
        // EXIT
        else if (choice === "Exit") {
            console.log("Exiting....");
            break;
        }
    }
    ;
}
main();
