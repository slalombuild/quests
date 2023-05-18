import title from '../data/title'

function createHeading() {
    const h1 = document.createElement('h1')
    h1.innerText = title

    return h1
}

export default createHeading
