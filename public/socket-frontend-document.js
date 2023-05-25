import { updateTextEditor } from "./document.js";

const socket = io();

function selectDocument(name){
    socket.emit("select_document", name);
}

function emitTextEditor(localData){
    socket.emit("text_editor", localData)
}

socket.on("text_editor_clients", (text) =>{
    updateTextEditor(text);
 });

export { emitTextEditor, selectDocument };