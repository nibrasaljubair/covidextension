replaceText(document.body)

function replaceText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }else if(element.nodeType === Text.TEXT_NODE){
        if (element.textContent.match(/coronavirus/gi)){
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
            '<span style="background-color: white; color: white;">$1</span>')
            element.replaceWith(newElement)

        }
        if (element.textContent.match(/covid/gi)){
            const newElements = document.createElement('span')
            newElements.innerHTML = element.textContent.replace(/(covid)/gi,
            '<span style="background-color: white; color: white;">$1</span>')
            element.replaceWith(newElements)

        }

        //element.textContent = element.textContent.replace(/coronavirus/gi, '  ')
    }

}