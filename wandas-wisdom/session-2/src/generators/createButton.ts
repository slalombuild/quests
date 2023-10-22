import displayRandomQuote from '../mutators/displayRandomQuote'

function createButton(text: string): HTMLElement {
    const button: HTMLElement = document.createElement('button')
    button.innerText = text
    button.addEventListener('click', displayRandomQuote)

    return button
}

export default createButton
