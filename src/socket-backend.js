import io from "./server.js";

io.on("connection", (socket) =>{
    console.log("One client has been connected! ID: ", socket.id);

    socket.on("select_document", (documentName) => {
        socket.join(documentName);
    });

    socket.on("text_editor", ({ text, documentName }) => {
        socket.to(documentName).emit("text_editor_clients", text);
    });

});