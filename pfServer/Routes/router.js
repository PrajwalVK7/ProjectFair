// creating router : define path to resolve varous request
const userController = require('../Controllers/userController');
const projectController = require('../Controllers/projectController');
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
// 1) import express

const express = require('express');

// 2) create an object for the class Router
const router = new express.Router();


// 3) define paths for resolving request

// register
router.post('/user/register',userController.register)

// login
router.post('/user/login',userController.login)

// add project
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

// get home project
router.get('/project/home-project',projectController.getHomeProjects)
router.get('/project/all-project/',jwtMiddleware,projectController.getAllProjects)
router.get('/project/user-project',jwtMiddleware,projectController.getUserProject)

// 4) export router

module.exports = router;