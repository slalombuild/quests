import createButton from './createButton'

function createForm(): HTMLFormElement {
    const form: HTMLFormElement = document.createElement('form')
    const div: HTMLDivElement = document.createElement('div')
    const select: HTMLSelectElement = document.createElement('select')
    const button: HTMLButtonElement = createButton('Set Topic')
    const options: string[] = ['hope', 'love']

    const handleSubmit = (event: any) => {
        event.preventDefault()
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
