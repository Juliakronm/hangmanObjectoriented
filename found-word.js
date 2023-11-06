export default class FoundWord {

  letters = []

  get asString() {
    return this.letters.join(' ')
  }

  constructor(secretWord) {
    this.letters = new Array(secretWord.length).fill("*")

  }
  createNotFoundLetters(chars) {
  }

  applyFoundLetter(letter, positions) {
    for (let index of positions) {
      this.letters[index] = letter
    }
  }


}