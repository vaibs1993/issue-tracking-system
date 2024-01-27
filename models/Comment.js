const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
        issueId: String, // ID of the issue
        body: String,
        createdBy: String, // ID of the user who added the comment
        createdAt: Date
});

module.exports = mongoose.model('Comment', commentSchema);
