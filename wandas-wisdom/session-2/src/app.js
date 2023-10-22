import createHeading from './generators/createHeading'
import createButton from './generators/createButton'
import createQuoteSection from './generators/createQuoteSection'
import createDescription from './generators/createDescription'
import displayRandomQuote from './mutators/displayRandomQuote'

const heading = createHeading()
const button = createButton()
const section = createQuoteSection()
const description = createDescription()

const body = document.querySelector('body')

body.appendChild(heading)
body.appendChild(button)
body.appendChild(section)
body.appendChild(description)

displayRandomQuote()
