const express = require('express');
const { createUser, loginUser } = require('../controller/Auth');
const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);

exports.router = router;
