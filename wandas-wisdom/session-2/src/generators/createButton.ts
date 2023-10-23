import { MouseEventHandler } from '../interfaces'

function createButton(
    text: string,
    eventHandler?: MouseEventHandler
): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button')
    button.innerText = text

    if (!eventHandler) {
        button.type = 'submit'
    } else {
        button.addEventListener('click', eventHandler)
    }

    return button
}

export default createButton
