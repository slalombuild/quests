import description from '../data/description'

function createDescription() {
    const p = document.createElement('p')
    p.innerText = description

    return p
}

export default createDescription
