const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

router.get('/taskList', taskController.taskList);
router.post('/addTask', taskController.addTask);
router.put('/updateTask/:id', taskController.updateTask);
router.get('/getTaskById/:id', taskController.getTaskById);
router.delete('/deleteTask/:id', taskController.deleteTask);
router.post('/login', taskController.userLogin);
router.post('/addUser', taskController.addUser);


module.exports = router;
