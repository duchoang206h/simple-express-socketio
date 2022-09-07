const router = require('express').Router();
const { messageController } = require('../controllers/message.controller');
router.get('/message', messageController.sendMessage);
module.exports = router;