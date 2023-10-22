import selectRandomQuote from './selectRandomQuote'
import checkIfIdentical from './checkIfIdentical'

function chooseUniqueQuote(oldText, allQuotes) {
    const newQuote = selectRandomQuote(allQuotes)
    const newText = newQuote.text
    const isIdentical = checkIfIdentical(oldText, newText)

    if (!isIdentical) {
        return newQuote
    } else {
        chooseUniqueQuote(oldText, allQuotes)
    }
}

export default chooseUniqueQuote
