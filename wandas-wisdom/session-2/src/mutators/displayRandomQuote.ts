import { Quote } from '../types'
import quotes from '../data/quotes'
import chooseUniqueQuote from '../utilities/chooseUniqueQuote'
import makeAllCaps from '../utilities/makeAllCaps'
import sortTags from '../utilities/sortTags'
import replaceTags from './replaceTags'

function displayRandomQuote(): void {
    const textArticle: HTMLElement | null = document.getElementById('text')
    const authorP: HTMLElement | null = document.getElementById('author')
    
    if (textArticle && authorP) {
        const oldQuote: string = textArticle.innerText
        const newQuote: Quote = chooseUniqueQuote(oldQuote, quotes)
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
