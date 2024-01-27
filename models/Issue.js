const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: String,
    category: String,
    status: String,
    assignedTo: String,
    createdBy: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
    comments: [
        {
            body: String,
            createdBy: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = mongoose.model('Issue', issueSchema);
