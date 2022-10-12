const prompt = require('prompt-sync')({sigint: true});

console.log("Welcome! this is your To do list.");
console.log(`-select an action-`);
console.log(`[1]Creating a new to-do list `);
console.log(`[2] Complete a to-do itme`);
console.log(`[3] Exit apllication`);

let option = Number(prompt(`: `));
let toDolist = [];
let statusArray = [];

while(option !== 3){
    if(option === 1){
        console.log(`-Creating a new to-do list-`);
        console.log(`-what is the item called?`);

        let addItem = prompt(`: `);
        while(addItem.length === 0){
            console.log("Invalid: Input cannot be empty");
            addItem = prompt(`: `);
        }

        toDolist.push(addItem);
        statusArray.push(false);

        displaylist();
        //prompt display and selection
        selectoption();

    }else if(option === 2){
        if(toDolist.length !== 0){
        console.log(`-completeing a to do item-`);
        console.log(`-which to do item would you like to complete?`);
        displaylist();
        
        let newStatus = Number(prompt(`: `));

        // console.log("newStatus check: " + newStatus);
        // console.log("type check: " + typeof newStatus);
        while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
            console.log(`Input a number: `);
            newStatus = Number(prompt(`: `));
        }
        statusArray[newStatus - 1] = true;
    }else {
        console.log("Add an item from your to do list before trying to complete an item")
    }

        displaylist();
        //prompt display and selection
        selectoption();

    }else if(option === 3){
        displaylist();
        console.log(`-Exiting To-do List Application-`);
    }else {
        console.log(`Invalid operstion`);
        //prompt display and selection
        selectoption();
    }
}
console.log(`exiting To-do List Application`);

//functions

function selectoption(){
    console.log(`-select an action-`);
    console.log(`[1]Creating a new to-do list `);
    console.log(`[2] Complete a to-do itme`);
    console.log(`[3] Exit apllication`);
    option = Number(prompt(`: `));
}

function displaylist(){

    if(toDolist.length === 0){
        console.log("Your to-do list is empty.");
    }else {
        console.log(`you have ${toDolist.length} to-do item(s)`);
    }

    for(let i = 0; i < toDolist.length; i++){
        let status = "";

        if(statusArray[i] === false){
            status = "Incomplete";
        }else if (statusArray[i] === true){
            status = `Complete`;
        }
        console.log(`${i + 1}. ${status} ${toDolist[i]}`);
    }

}






