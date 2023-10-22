import quotes from '../data/quotes'
import chooseUniqueQuote from '../utilities/chooseUniqueQuote'
import makeAllCaps from '../utilities/makeAllCaps'
import sortTags from '../utilities/sortTags'
import replaceTags from './replaceTags'

function displayRandomQuote() {
    const textArticle = document.getElementById('text')
    const authorP = document.getElementById('author')
    const oldQuote = textArticle.innerText
    const newQuote = chooseUniqueQuote(oldQuote, quotes)
    const quoteText = newQuote.text
    const quoteAuthor = makeAllCaps(newQuote.author)
    const quoteTags = sortTags(newQuote.tags)
    
    textArticle.innerText = quoteText
    authorP.innerText = quoteAuthor
    replaceTags(quoteTags)
}

export default displayRandomQuote
