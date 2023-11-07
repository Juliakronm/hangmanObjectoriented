import fs from 'node:fs'
import { Word } from "./word.js";

export default class SecretWord{
  secretWord
  slumpatIndex
  slumpatOrd

  secretWord = fs.readFileSync('words.csv', 'utf8')
  .trim()
  .split('\n')
  .map(w => new Word());

  slumpatIndex = Math.floor(Math.random() * this.secretWord.length);
  slumpatOrd = this.secretWord[slumpatIndex];


  get length() {
    return this.slumpatOrd.length
  }

  get asString() {
    return this.slumpatOrd.join(' ')
  }

  constructor(word) {
    this.slumpatOrd = this.processWord(word)
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