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
    this.secretWord = new SecretWord()
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

    print('The secret word has ' + this.secretWord.length + ' letters')
    print(this.foundWord.asString)
    this.guessWord()
  }
    
  guessWord() {
    let letter = new Question('Guess a letter: ').answer
    print('you guessed ' + letter)
      
    if (this.secretWord.isLetterInSecretWord(letter)) {
      let positions = this.secretWord.getLetterPositions(letter)
      this.foundWord.applyFoundLetter(letter, positions)
      print('you found \n' + this.foundWord.asString)
      this.checkWin()
    } else {
      print(this.gallows.step())
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

