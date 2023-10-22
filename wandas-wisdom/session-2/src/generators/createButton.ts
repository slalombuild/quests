import { MouseEventHandler } from '../interfaces'

function createButton(
    text: string,
    eventHandler: MouseEventHandler
): HTMLElement {
    const button: HTMLElement = document.createElement('button')
    button.innerText = text
    button.addEventListener('click', eventHandler)

    return button
}

export default createButton
