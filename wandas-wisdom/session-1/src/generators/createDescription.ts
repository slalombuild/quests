import description from '../data/description'

function createDescription(): HTMLParagraphElement {
    const p: HTMLParagraphElement = document.createElement('p')
    p.innerText = description

    return p
}

export default createDescription
