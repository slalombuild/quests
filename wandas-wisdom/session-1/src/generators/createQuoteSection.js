function createQuoteSection() {
    const section = document.createElement('section')
    const article = document.createElement('article')
    const p = document.createElement('p')
    const span = document.createElement('span')
    const div = document.createElement('div')

    section.id = 'quote'
    article.id = 'text'
    p.id = 'byline'
    span.id = 'author'
    div.id = 'tags'
    p.innerText = '—'

    section.appendChild(article)
    section.appendChild(p)
    section.appendChild(div)
    p.appendChild(span)

    return section
}

export default createQuoteSection
