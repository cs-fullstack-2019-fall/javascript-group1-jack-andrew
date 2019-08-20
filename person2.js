//This function asks for user input, lists English/Spanish translations or allows new input to array
function menu() {
    let quitKey = false;

    while (quitKey === false) {
        let userInput = prompt("Press 1 to list all English to Spanish translations, press 2 to list all Spanish to English translations, press 3 to enter a new English translation, press 4 to enter a new Spanish translation, and press 5 or 'q' to quit.\n");

        if (userInput === "1") {
            console.log("English + Spanish array here");
        } else if (userInput === "2") {
            console.log("Spanish + English array here");
        } else if (userInput === "3") {
            engArray.push(prompt("Enter a new English word"));
            spanArray.push(prompt("Enter the Spanish equivalent"))
        } else if (userInput === "4") {
            spanArray.push(prompt("Enter a new Spanish word"));
            engArray.push(prompt("Enter the English equivalent"));
        } else if (userInput === "5" || userInput === "q") {
            quitKey = true
        }
    }
}