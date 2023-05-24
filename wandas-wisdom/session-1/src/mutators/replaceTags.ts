function replaceTags(newTags: string[]): void {
    const tagsDiv: HTMLElement | null = document.getElementById('tags')
    if(tagsDiv) {
        while (tagsDiv.hasChildNodes()) {
            const firstTag = tagsDiv.firstChild as ChildNode
            
            tagsDiv.removeChild(firstTag)
        }
        
        newTags.forEach(tag => {
            const tagSpan: HTMLSpanElement = document.createElement('span')
            
            tagSpan.innerText = tag
            tagsDiv.appendChild(tagSpan)
        })
    } else {
        throw new Error("'tags' div not found");     
    }
}

export default replaceTags
