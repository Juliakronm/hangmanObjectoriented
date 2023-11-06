import Question from "./question.js";
import FoundWord from "./found-word.js";
import SecretWord from "./secret-word.js";
import Gallows from "./gallows.js";

const print = console.log

export default class Game{
  secretWord
  foundWord
  gallows
  done
  constructor() {
    this.gallows = new Gallows()
    let question = new Question('Type the secret word, do not show your opponent')
    this.secretWord = new SecretWord(question.answer)
    this.foundWord = new FoundWord(this.secretWord)
    this.done = false
  }

  start() {
    print('welcome to a simple game of hangman')
    while (!this.done) {
      this.runRound()
    }
  }
  
  runRound() {
    //10. ask for secret word                             bass

    print('The secret word has ' + this.secretWord.length + ' letters')
    //process secret word intro chars'                b a s s
    //store found word as empty positions for chars   _ _ _ _
    print(this.foundWord.asString)
    //20. ask for letter ?               
    this.guessWord()
  }
    
  guessWord() {
    let letter = new Question('Guess a letter: ').answer
    print('you guessed ' + letter)
      
    if (this.secretWord.isLetterInSecretWord(letter)) {
      //  (b) found                  store b in used chars b _ _ _
      //  (s) found                  store s in used chars b _ s s
      let positions = this.secretWord.getLetterPositions(letter)
      this.foundWord.applyFoundLetter(letter, positions)
      print('you found \n' + this.foundWord.asString)
      //check if word i compleye ( no empty slots)?  exit to win round
      this.checkWin()
    } else {
      //  (x)  not found             store x in used chars, add part to gallows
      print(this.gallows.step())
      //check if gallows is done? exit to looose round
      this.checkLoose()

    }    
  }

  checkWin() {
    if (!this.foundWord.letters.includes('*')) {
      print('congrats, you basically survived\n' + this.foundWord.asString)
      this.done = true;
    }
  }
  checkLoose() {
    if (this.gallows.stages.length == 0) {
      print('you are DEAD\n' + 'the word was ' + this.secretWord.asString)
      this.done = true;
    } 
  }


}

