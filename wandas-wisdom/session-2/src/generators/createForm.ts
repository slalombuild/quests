import setValue from '../storage/setValue'
import createButton from './createButton'

function createForm(): HTMLElement {
    const form: HTMLElement = document.createElement('form')
    const div: HTMLElement = document.createElement('div')
    const select: HTMLSelectElement = document.createElement('select')
    const button: HTMLButtonElement = createButton('Set Topic')
    const options: string[] = ['hope', 'love']
    const handleSubmit = (event: Event) => {
        event.preventDefault()
        const selectedOption: string = select.value
        setValue('topic', selectedOption)
    }

    options.forEach((choice: string): void => {
        const option: HTMLOptionElement = document.createElement('option')
        option.value = choice
        option.text = choice
        select.appendChild(option)
    })

    div.innerText = 'Select the topic to filter the quotes'

    form.appendChild(div)
    form.appendChild(select)
    form.appendChild(button)
    form.addEventListener('submit', handleSubmit)

    return form
}

export default createForm
