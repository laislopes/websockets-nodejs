import { insertDocumentLink, removeLinkDocument } from "./index.js";

const socket = io();

socket.emit("get_documents", (documents) => {
    documents.forEach((document) => {
        insertDocumentLink(document.name);
    })
});

function emitAddDocument(name) {
    socket.emit("add_document", name);
};

socket.on("add_document_ui", (name) => {
    insertDocumentLink(name);
})

socket.on("document_exists", (name) => {
    alert(`The document ${name} already exists!`);
});

socket.on("delete_document_success", (name) => {
    removeLinkDocument(name);
});

export { emitAddDocument };