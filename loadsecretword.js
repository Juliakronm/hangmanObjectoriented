import fs from 'node:fs'
import { Word } from "./word.js";

export class LoadSecretWord {
  constructor() {
    this.wordsData = fs.readFileSync('words.csv', 'utf8')
      .trim()
      .split('\n')

    return wordsData.map(w => new Word(w))
  }
}