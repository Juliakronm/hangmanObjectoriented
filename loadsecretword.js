import { Word } from "./word.js";

export class LoadWordList {
  constructor() {
    this.wordsData = new Word
  }

  display() {
    for (const word of this.wordsData) {
      console.log(word)
    }
  }
}