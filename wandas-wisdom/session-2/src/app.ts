import createHeading from './generators/createHeading'
import createButton from './generators/createButton'
import createQuoteSection from './generators/createQuoteSection'
import createDescription from './generators/createDescription'
import createForm from './generators/createForm'
import displayRandomQuote from './mutators/displayRandomQuote'
import setValue from './storage/setValue'

const heading: HTMLElement = createHeading()
const button: HTMLElement = createButton('Get Quote', displayRandomQuote)
const section: HTMLElement = createQuoteSection()
const description: HTMLElement = createDescription()
const form: HTMLElement = createForm()

const body: HTMLElement = document.querySelector('body') as HTMLElement

body.appendChild(heading)
body.appendChild(button)
body.appendChild(section)
body.appendChild(description)
body.appendChild(form)

setValue('topic', '')

displayRandomQuote()
