import selectRandomQuote from './selectRandomQuote'
import checkIfIdentical from './checkIfIdentical'
import {Quote} from '../data/quotes'

function chooseUniqueQuote(oldText: string, allQuotes: Quote[]): Quote {
    const newQuote: Quote = selectRandomQuote(allQuotes)
    const newText:string = newQuote.text
    const isIdentical: boolean = checkIfIdentical(oldText, newText)

    if (!isIdentical) {
        return newQuote
    } else {
        return chooseUniqueQuote(oldText, allQuotes)
    }
}

export default chooseUniqueQuote
