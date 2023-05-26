import { addDocument, deleteDocument, findDocument, getDocuments, updateDocument } from "./documentsDb.js";
import io from "./server.js";

io.on("connection", (socket) =>{
    socket.on("get_documents", async (giveDocumentsBack) => {
        const documents = await getDocuments();

        giveDocumentsBack(documents);
    });

    socket.on("add_document", async (name) => {
        const documentExists = (await findDocument(name)) !== null;

        if(documentExists){
            socket.emit("document_exists", name);
        }else{
            const result = await addDocument(name);

            if(result.acknowledged){
                io.emit("add_document_ui", name);
            }
        }
    });

    socket.on("select_document", async (documentName, giveTextBack) => {
        socket.join(documentName);

        const document = await findDocument(documentName);

        if(document){
            giveTextBack(document.text);
        }
    });

    socket.on("text_editor", async ({ text, documentName }) => {

        const update = await updateDocument(documentName, text);

        if(update.modifiedCount){
            socket.to(documentName).emit("text_editor_clients", text);
        }
    });

    socket.on("delete_document", async (documentName ) => {

        const result = await deleteDocument(documentName);

        if(result.deletedCount){
          io.emit("delete_document_success", documentName);
        }
    });


});
