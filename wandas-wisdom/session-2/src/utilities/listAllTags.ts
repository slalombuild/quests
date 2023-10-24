import quotes from '../data/quotes'
import { Quote } from '../types'
import { BooleanObject } from '../interfaces'

function listAllTags(): string[] {
    const allTags: BooleanObject = {}

    quotes.forEach((quote: Quote): void => {
        quote.tags.forEach((tag: string): void => {
            allTags[tag] = true
        })
    })

    const uniqueTags: string[] = Object.keys(allTags)
    const sortedTags: string[] = uniqueTags.sort()

    return sortedTags
}

export default listAllTags
