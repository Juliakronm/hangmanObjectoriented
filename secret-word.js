import { LoadWordList } from "./loadsecretword.js";

export default class SecretWord{
  multipleWords
  chooseWord
  processingWord

  constructor() {
    this.multipleWords = new LoadWordList()
    this.chooseWord = this.randomWord(this.multipleWords.wordsData.list).trim()
    this.processingWord = this.processWord(this.chooseWord)

  }

  randomWord(wordList) {
    let randomIndex = Math.floor(Math.random() * wordList.length);
    let getAWord = wordList[randomIndex];
    return getAWord
}

  get length() {
    return this.processingWord.length
  }

  get asString() {
    return this.processingWord.join('')
  }

  processWord(word) {
    return word.toUpperCase().split('')
  }

  isLetterInSecretWord(letter) {
    return this.processingWord.includes(letter)
  }

  getLetterPositions(letter) {
    let positions = []
    for (let i = 0; i < this.processingWord.length; i++) {
      if (this.processingWord[i] == letter) {
        positions.push(i)

      }
    
    }
    return positions
  }
}