const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error, wrong input");
    }
  };
  
  const getComputerChoice = () => {
    computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
      case 0:
        return "paper";
        break;
      case 1:
        return "rock";
        break;
      case 2:
        return "scissors";
        break;
      default:
        return "wrong input";
    }
  };
  
  // // The possible outcomes are:
  
  // Rock destroys scissors.
  // Scissors cut paper.
  // Paper covers rock.
  // If there’s a tie, then the game ends in a draw.
  
  const determineWinner = (userInput, computerInput) => {
    if (userInput === computerInput) {
      return "The game is a tie!"
    }
    
    if (userInput === "rock"){
      if(computerInput === "paper"){
        return "The computer wins"
      }
      else {
        return 'You won!'
      }
    }
   if(userInput === "paper"){
     if(computerInput === "scissors"){
        return "The computer wins"
      }
      else{
        return "The user wins"
      }
  }
  if (userInput === "scissors"){
    if (computerInput === "rock"){
      return "The computer wins"
    }
    else{
      return "The user wins"
    }
  }
  if (userInput === 'bomb')
    return "The user wins"
  };
  
  const playGame = () => {
    userInput = getUserChoice("bomb")
    console.log(userInput)
    computerInput = getComputerChoice()
    console.log(computerInput)
    console.log(determineWinner(userInput, computerInput))
  }
  playGame()
  
  
  