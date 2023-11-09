import fs from 'node:fs'

export class Word{
  word

  list = []
  constructor() {
    this.list = fs.readFileSync('./words.csv', 'utf8').trim().split('\n')
  }
  // asCSV() {
  //   return list
  // }
}




// constructor(word) {
//   this.word = word
// }

