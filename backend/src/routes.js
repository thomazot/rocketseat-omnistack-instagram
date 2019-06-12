const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostsController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostsController.index);
routes.post('/posts', upload.single('image'), PostsController.store);

routes.post('/posts/:id/like', LikeController.store);


module.exports = routes;