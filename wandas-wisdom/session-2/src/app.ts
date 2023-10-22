import createHeading from './generators/createHeading'
import createButton from './generators/createButton'
import createQuoteSection from './generators/createQuoteSection'
import createDescription from './generators/createDescription'
import displayRandomQuote from './mutators/displayRandomQuote'

const heading: HTMLElement = createHeading()
const button: HTMLElement = createButton()
const section: HTMLElement = createQuoteSection()
const description: HTMLElement = createDescription()

const body: HTMLElement = document.querySelector('body') as HTMLElement

body.appendChild(heading)
body.appendChild(button)
body.appendChild(section)
body.appendChild(description)

displayRandomQuote()
