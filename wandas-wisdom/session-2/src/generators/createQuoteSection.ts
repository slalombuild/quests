function createQuoteSection(): HTMLElement {
    const section: HTMLElement = document.createElement('section')
    const article: HTMLElement = document.createElement('article')
    const p: HTMLElement = document.createElement('p')
    const span: HTMLElement = document.createElement('span')
    const div: HTMLElement = document.createElement('div')

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
