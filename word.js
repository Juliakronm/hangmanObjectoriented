import fs from 'node:fs'

export class Word{
  word

  list = []
  constructor() {
    this.list = this.list.push(fs.readFileSync('./words.csv', 'utf8').trim().split('\n'))
    return this.list
  }
  // asCSV() {
  //   return list
  // }
}




// constructor(word) {
//   this.word = word
// }

