import { LoadWordList } from "./loadsecretword.js";

export default class SecretWord{
  multipleWords
  chooseWord
  processingWord


  constructor() {
    this.multipleWords = new LoadWordList
    this.chooseWord = this.randomWord(this.multipleWords)
    this.processingWord = this.processWord(this.chooseWord)

  }

  randomWord(wordList) {
    let randomIndex = Math.floor(Math.random() * wordList.length);
    getAWord = this.wordList[randomIndex];
    return this.getAWord
}

  get length() {
    return this.slumpatOrd.length
  }

  get asString() {
    return this.slumpatOrd.join('')
  }

  processWord(word) {
    return word.toUpperCase().split('')
  }

  isLetterInSecretWord(letter) {
    return this.slumpatOrd.includes(letter)
  }

  getLetterPositions(letter) {
    let positions = []
    for (let i = 0; i < this.slumpatOrd.length; i++) {
      if (this.slumpatOrd[i] == letter) {
        positions.push(i)

      }
    
    }
    return positions
  }
}