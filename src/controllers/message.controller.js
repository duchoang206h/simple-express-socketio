class MessageController {
    sendMessage = (req, res) => {
        const { message } = req.query;
        _io.emit("message", message);
        return res.status(200).json({ status: 200})
    }
};
module.exports = {
    messageController: new MessageController()
}