class Socket {
    constructor(){}

    connection = async (socket) => {
        socket.on("disconnect", () => {
            console.log(`disconnect: ${socket.id}`);
        })
    }
};
module.exports = {
    socketService: new Socket()
}