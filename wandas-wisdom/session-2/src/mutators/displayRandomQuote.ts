import { Quote } from '../types'
import quotes from '../data/quotes'
import chooseUniqueQuote from '../utilities/chooseUniqueQuote'
import makeAllCaps from '../utilities/makeAllCaps'
import sortTags from '../utilities/sortTags'
import replaceTags from './replaceTags'
import getValue from '../storage/getValue'
import filterQuotesByTopic from '../utilities/filterQuotesByTopic'

function displayRandomQuote(): void {
    const textArticle: HTMLElement | null = document.getElementById('text')
    const authorP: HTMLElement | null = document.getElementById('author')
    const topic: string = getValue('topic')

    if (textArticle && authorP) {
        let fullQuotes: Quote[]

        if (topic) {
            fullQuotes = filterQuotesByTopic(topic)
        } else {
            fullQuotes = quotes
        }

        const oldQuote: string = textArticle.innerText
        const newQuote: Quote = chooseUniqueQuote(oldQuote, fullQuotes)
        const quoteText: string = newQuote.text
        const quoteAuthor: string = makeAllCaps(newQuote.author)
        const quoteTags: string[] = sortTags(newQuote.tags)

        textArticle.innerText = quoteText
        authorP.innerText = quoteAuthor
        replaceTags(quoteTags)
    } else {
        throw new Error(`No elements with 'text' or 'author' ids found in DOM`)
    }
}

export default displayRandomQuote
