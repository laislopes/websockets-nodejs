import { alertAndRedirect, updateTextEditor } from "./document.js";

const socket = io();

function selectDocument(name){
    socket.emit("select_document", name, (text) => {
        updateTextEditor(text);
    });
}

function emitTextEditor(localData){
    socket.emit("text_editor", localData)
}

socket.on("text_document", (text) => {
    updateTextEditor(text);
});

function emitDeleteDocument(name){
    socket.emit("delete_document", name);
}

socket.on("delete_document_success", (name) => {
    alertAndRedirect(name);
});


export { emitTextEditor, selectDocument, emitDeleteDocument};