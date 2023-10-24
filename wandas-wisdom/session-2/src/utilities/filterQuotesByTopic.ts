import quotes from '../data/quotes'
import { Quote } from '../types'

function filterQuotesByTopic(topic: string): Quote[] {
    const result: Quote[] = quotes.filter((quote: Quote): boolean => {
        return quote.tags.includes(topic)
    })

    return result
}

export default filterQuotesByTopic
