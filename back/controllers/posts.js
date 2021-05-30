import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

const router = express.Router();

/**
 * This function is responsible for searching in the Atlas noSQL database, the list of posts published by users
 * @param  {Request} req It is in charge of handling the incoming request given the page it is on
 * @param  {Response} res Responsible for responding to the request. 200 OK to return all posts. 500 Failed to make request
 */
export const getPosts = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;

    const startIndex = (Number(page) - 1) * LIMIT;

    const total = await PostMessage.countDocuments({});

    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * This function is responsible for searching in the Atlas noSQL database, the list of posts created by users given a specific search by post name or tag.
 * @param  {Request} req It is in charge of handling the incoming request given the page, post name and tag it is on.
 * @param  {Response} res Responsible for responding to the request. 200 OK to return all filtered posts. 404 In case there are no posts.
 */
export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const posts = await PostMessage.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * This function is responsible for searching in the Atlas noSQL database, a post created by an user given a specific id.
 * @param  {Request} req It is in charge of handling the incoming request given the post id.
 * @param  {Response} res Responsible for responding to the request. 200 OK to return all filtered posts. 404 In case the post was not found.
 */
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * This function is responsible for creating a post given by a user, in the noSQL Atlas database.
 * @param  {Request} req It is in charge of attending the incoming request according to a post that it receives.
 * @param  {Response} res Responsible for responding to the request. 201 Created to return the new post. 409 In case there are conflicts.
 */
export const createPost = async (req, res) => {
  const post = req.body;

  const newPostMessage = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 * This function is responsible for updating a post given by a user, in the noSQL Atlas database.
 * @param  {Request} req It is in charge of attending the incoming request according to a post that it receives.
 * @param  {Response} res Responsible for responding to the request. 200 OK to return the updated post.
 */
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

/**
 * This function is responsible for deleting a post given by a user, in the noSQL Atlas database.
 * @param  {Request} req It is in charge of attending the incoming request according to a post that it receives.
 * @param  {Response} res Responsible for responding to the request. 200 OK to return the successful message.
 */
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Ups! No existe un post con id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post eliminado exitosamente." });
};

/**
 * This function is responsible for liking a post given by a user, in the noSQL Atlas database.
 * @param  {Request} req It is in charge of attending the incoming request according to a post that it receives.
 * @param  {Response} res Responsible for responding to the request. 200 OK to return the liked post. 409 No Post found with that id.
 */
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Sin autenticarse" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Ups! No existe un post con id: ${id}`);

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};

export default router;
