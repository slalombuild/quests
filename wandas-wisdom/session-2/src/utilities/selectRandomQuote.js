import generateRandomNumber from './generateRandomNumber'

function selectRandomQuote(possibleQuotes) {
    const quotesLength = possibleQuotes.length
    const randomNumber = generateRandomNumber(quotesLength)
    const randomQuote = possibleQuotes[randomNumber]

    return randomQuote
}

export default selectRandomQuote
