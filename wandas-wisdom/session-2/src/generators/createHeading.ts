import title from '../data/title'

function createHeading(): HTMLElement {
    const h1: HTMLElement = document.createElement('h1')
    h1.innerText = title

    return h1
}

export default createHeading
