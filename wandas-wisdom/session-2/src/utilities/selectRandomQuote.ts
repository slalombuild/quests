import { Quote } from '../types'
import generateRandomNumber from './generateRandomNumber'

function selectRandomQuote(possibleQuotes: Quote[]): Quote {
    const quotesLength: number = possibleQuotes.length
    const randomNumber: number = generateRandomNumber(quotesLength)
    const randomQuote: Quote = possibleQuotes[randomNumber]

    return randomQuote
}

export default selectRandomQuote
