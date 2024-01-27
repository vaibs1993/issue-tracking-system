const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
        issueId: String, // ID of the issue
        assignedTo: String, // ID of the assigned team member
        assignedBy: String, // ID of the user who assigned the issue
        assignedAt: Date
});

module.exports = mongoose.model('Assignment', assignmentSchema);
