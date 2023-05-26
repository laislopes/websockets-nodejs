import { emitAddDocument } from "./socket-frontend-index.js";

const documentList = document.getElementById("list-documents");
const form = document.getElementById("form-add-document");
const inputDocument = document.getElementById("input-document");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    emitAddDocument(inputDocument.value);
    inputDocument.value = "";
});

function insertDocumentLink(documentName){
    documentList.innerHTML += `
    <a 
        href="document.html?name=${documentName}" 
        class="list-group-item list-group-item-action"
        id="document-${documentName}"
        >
        ${documentName}
     </a>
    `;
};

function removeLinkDocument(documentName){
    const documentToRemove = document.getElementById(`document-${documentName}`);

    documentList.removeChild(documentToRemove);
}

export { insertDocumentLink, removeLinkDocument };