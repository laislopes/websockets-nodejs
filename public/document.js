import { emitTextEditor, selectDocument } from "./socket-frontend-document.js";

const parameters = new URLSearchParams(window.location.search);
const documentName = parameters.get("name");

const textEditor = document.getElementById("text-editor");
const documentTitle = document.getElementById("title-document");

documentTitle.textContent = documentName || "Untitled";

selectDocument(documentName);

textEditor.addEventListener("keyup", () => {
    emitTextEditor({
        text: textEditor.value, 
        documentName: documentName});
});

function updateTextEditor(text){
    textEditor.value = text;
}

export { updateTextEditor };