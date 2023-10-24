import displayRandomQuote from '../mutators/displayRandomQuote'

function createButton(text: string): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button')
    button.innerText = text
    button.addEventListener('click', displayRandomQuote)

    return button
}

export default createButton
