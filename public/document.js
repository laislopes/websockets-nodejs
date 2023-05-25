import { emitTextEditor } from "./socket-frontend-document.js";

const textEditor = document.getElementById("text-editor");

textEditor.addEventListener("keyup", () => {
    emitTextEditor(textEditor.value);
});

function updateTextEditor(text){
    textEditor.value = text;
}

export { updateTextEditor };