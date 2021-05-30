import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

/**
 * This function takes care of giving a user login after performing checks on the noSQL Atlas database. A token corresponding to one hour is generated and the password stored in the DB is decrypted.
 * @param  {Request} req It is in charge of attending the incoming request given an Email and password.
 * @param  {Response} res Responsible for responding to the request. 200 OK to return a token with an existing user. 500 Something went wrong.
 */
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "El usuario no existe" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ message: "Verifica de nuevo tus credenciales." });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Ups! Algo no funcionó" });
  }
};

/**
 * This function is responsible for registering a user on the platform given a form. It performs the necessary verifications to generate an encrypted password that will be stored in the DB and a token that will be stored in the local Storage while the session lasts.
 * @param  {Request} req It is in charge of attending the incoming request given an Email, password, confirmed password, first name and last name.
 * @param  {Response} res Responsible for responding to the request. 201 Created to return a token with an existing user. 400 Bad Credentials. 500 Bad credentials.
 */
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El correo ingresado ya existe" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Las contraseñas no coinciden" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Ups! Algo no funcionó" });
  }
};
