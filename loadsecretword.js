import fs from 'node:fs'
import { Word } from "./word.js";

export class LoadWordList {
  constructor() {
    this.wordsData = fs.readFileSync('words.csv', 'utf8')
      .trim()
      .split('\n')
      .map(w => new Word(w))

  }

  // display() {
  //   for (const word of this.wordsData) {
  //     console.log(word)
  //   }
  // }
}