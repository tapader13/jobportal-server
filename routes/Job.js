const express = require('express');
const { createJobs, fetchJobs } = require('../controller/Job');
const router = express.Router();

router.post('/', createJobs);
router.get('/', fetchJobs);

exports.router = router;
