// routes/issueRoutes.js

const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

// Define routes for issues
router.get('/', issueController.getAllIssues);
router.get('/:id', issueController.getIssueById);
router.post('/', issueController.createIssue);
router.post('/createMultipleIssues', issueController.createMultipleIssues);
router.put('/:id', issueController.updateIssue);
router.delete('/:id', issueController.deleteIssue);

module.exports = router;
