import {quotes, Quote} from '../data/quotes'
import chooseUniqueQuote from '../utilities/chooseUniqueQuote'
import makeAllCaps from '../utilities/makeAllCaps'
import sortTags from '../utilities/sortTags'
import replaceTags from './replaceTags'

function displayRandomQuote() {
    const textArticle: HTMLElement | null = document.getElementById('text')
    const authorP: HTMLElement | null = document.getElementById('author')
    if (textArticle && authorP) {
        const oldQuote: string = textArticle.innerText
        const newQuote: Quote = chooseUniqueQuote(oldQuote, quotes)
        const quoteText: string = newQuote.text
        const quoteAuthor = makeAllCaps(newQuote.author)
        const quoteTags = sortTags(newQuote.tags)
        
        textArticle.innerText = quoteText
        authorP.innerText = quoteAuthor
        replaceTags(quoteTags)
    } else {
        throw new Error("'text' or 'author' elements not found!");
    }
}

export default displayRandomQuote
