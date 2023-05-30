const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

// GET
router.get('/add', TaskController.createTask);
router.get('/', TaskController.showTasks);
router.get('/edit/:id', TaskController.updateTask);

// POST
router.post('/add', TaskController.createTaskSave);
router.post('/remove', TaskController.removeTask);
router.post('/edit', TaskController.updateTaskPost);
router.post('/updatestatus', TaskController.updateStatus);

module.exports = router;
