var router = require('express').Router();
var controller = require('./controllers/messagesCtrl.js');

router.get('/messages', controller.getMessages);
router.post('/messages', controller.postMessage);

module.exports = router;
