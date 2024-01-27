// controllers/issueController.js

const Issue = require('../models/Issue');

// Controller functions for issue routes
const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getIssueById = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (issue == null) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.json(issue);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createIssue = async (req, res) => {
  const issue = new Issue(req.body);

  try {
    const newIssue = await issue.save();
    res.status(201).json(newIssue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createMultipleIssues = async (req, res) => {
  const issues = req.body; // Assuming req.body is an array of issues

  try {
    const newIssues = await Issue.insertMany(issues);
    res.status(201).json(newIssues);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateIssue = async (req, res) => {
  try {
    const updatedIssue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedIssue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteIssue = async (req, res) => {
  try {
    await Issue.findByIdAndDelete(req.params.id);
    res.json({ message: 'Issue deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllIssues,
  getIssueById,
  createIssue,
  updateIssue,
  deleteIssue,
  createMultipleIssues
};
