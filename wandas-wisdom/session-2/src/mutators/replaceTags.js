function replaceTags(newTags) {
    const tagsDiv = document.getElementById('tags')

    while (tagsDiv.hasChildNodes()) {
        const firstTag = tagsDiv.firstChild
    
        tagsDiv.removeChild(firstTag)
    }
    
    newTags.forEach(tag => {
        const tagSpan = document.createElement('span')

        tagSpan.innerText = tag
        tagsDiv.appendChild(tagSpan)
    })
}

export default replaceTags
