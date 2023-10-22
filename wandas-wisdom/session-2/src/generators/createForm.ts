import setValue from '../storage/setValue'
import createButton from './createButton'
import { MouseEventHandler } from '../interfaces'

function createForm(): HTMLElement {
    const form: HTMLElement = document.createElement('form')
    const setTopic: MouseEventHandler = (e: MouseEvent) => {
        e.preventDefault()
        setValue('topic', '')
    }
    const button: HTMLElement = createButton('Set Topic', setTopic)
    form.appendChild(button)

    return form
}

export default createForm
