import { Quote } from '../types'
import selectRandomQuote from './selectRandomQuote'
import checkIfIdentical from './checkIfIdentical'

function chooseUniqueQuote(oldText: string, allQuotes: Quote[]): Quote {
    const newQuote: Quote = selectRandomQuote(allQuotes)
    const newText: string = newQuote.text
    const isIdentical: boolean = checkIfIdentical(oldText, newText)

    if (!isIdentical || allQuotes.length === 1) {
        return newQuote
    } else {
        return chooseUniqueQuote(oldText, allQuotes)
    }
}

export default chooseUniqueQuote
