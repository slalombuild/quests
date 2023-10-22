import createButton from './createButton'

function createForm(): HTMLElement {
    const form: HTMLElement = document.createElement('form')
    const button: HTMLElement = createButton('Set Topic')
    form.appendChild(button)

    return form
}

export default createForm
