import fs from 'fs'
import wordListPath from 'word-list'

// words-list doesn't contain 'a' and 'i' as words for some reason?
// if an exception occurs here, let it bubble up and be handled by Express
const wordArray = ['a', 'i', ...fs.readFileSync(wordListPath, 'utf8').split('\n')]

const letters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

const isInWordList = word =>
  wordArray.indexOf(word) !== -1

const addLetterToArrayElements = (arr, letter) =>
  arr.map(elem => elem + letter)

// For each letter in letters[num], add
// all letters to all words in arr
const addLetters = (arr, num) =>
  letters[num].reduce((acc, letter) =>
    [...acc, ...addLetterToArrayElements(arr, letter)], [])

// Generate all possibilities, filter for English words, then sort
const getPhonewords = value =>
  value.split('')
    .reduce((acc, num) => addLetters(acc, num), [''])
    .filter(word => isInWordList(word))
    .sort()

export default getPhonewords
