import io from "./server.js";

io.on("connection", (socket) =>{
    console.log("One client has been connected! ID: ", socket.id);

    socket.on("text_editor", (text) => {
        socket.broadcast.emit("text_editor_clients", text);
    });
});