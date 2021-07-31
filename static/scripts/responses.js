function getBotResponse(input) {
    if(input == "rock"){
        return "paper";
    } else if(input == "paper"){
        return "scissors";
    } else if(input == "scissors"){
        return "rock";
    }

    if(input == "hello") {
        return "Hello there!";
    } else if(input == "goodbye"){
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}