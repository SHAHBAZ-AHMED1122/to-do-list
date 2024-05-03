import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "what do you want to add?"
        },
        { name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: false,
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addMore;
    console.log(todos);
}
