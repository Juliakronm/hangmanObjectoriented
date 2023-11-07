import { LoadSecretWord } from "./loadsecretword.js";

export default class SecretWord{

  constructor() {
    this.secretWord = LoadSecretWord
    this.slumpatOrd = this.processWord()

  }

  
  slumpatOrd() {
    slumpatIndex = Math.floor(Math.random() * this.secretWord.length);
    slumpatOrd = this.secretWord[slumpatIndex];
    return this.slumpatOrd
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