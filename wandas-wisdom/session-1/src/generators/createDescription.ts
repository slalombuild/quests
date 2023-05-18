import description from '../data/description'

function createDescription(): HTMLElement {
    const p: HTMLElement = document.createElement('p')
    p.innerText = description

    return p
}

export default createDescription
