//This function asks for user input, lists English/Spanish translations or allows new input to array
function menu() {
    let quitKey = false;

    while (quitKey === false) {
        let userInput = prompt(`Press 1 to list all English to Spanish translations.
        Press 2 to list all Spanish to English translations.
        Press 3 to enter a new English translation.
        Press 4 to enter a new Spanish translation.
        Press 5 or 'q' to quit.
        Press 6 to search an English word and find the Spanish equivalent.\n`);

        if (userInput === "1") {
            engToSpan();
        } else if (userInput === "2") {
            spanToEng();
        } else if (userInput === "3") {
            engArray.push(prompt("Enter a new English word"));
            spanArray.push(prompt("Enter the Spanish equivalent"))
        } else if (userInput === "4") {
            spanArray.push(prompt("Enter a new Spanish word"));
            engArray.push(prompt("Enter the English equivalent"));
        } else if (userInput === "5" || userInput === "q") {
            quitKey = true
        }
        else if (userInput === "6"){

        }
    }
}