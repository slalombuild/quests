function replaceTags(newTags: string[]): void {
    const tagsDiv: HTMLElement | null = document.getElementById('tags')

    if (tagsDiv) {
        while (tagsDiv.hasChildNodes()) {
            const firstTag: ChildNode = tagsDiv.firstChild as ChildNode
        
            tagsDiv.removeChild(firstTag)
        }
        
        newTags.forEach((tag: string): void => {
            const tagSpan: HTMLElement = document.createElement('span')
    
            tagSpan.innerText = tag
            tagsDiv.appendChild(tagSpan)
        })
    } else {
        throw new Error(`No element with 'tags' id found in DOM`)
    }
}

export default replaceTags
