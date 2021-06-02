import express from "express";
const router = express.Router();

import {
  resetPassword,
  signin,
  signup,
  getusers,
  deleteuser
} from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/users", getusers);
router.put("/:id", resetPassword);
router.delete("/:id", deleteuser);

export default router;
