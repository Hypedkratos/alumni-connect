'use server'
import { cookies } from "next/headers";
import connectToDatabase from "../db/connect";
import Users from "../db/models/user.model";
import jwt from "jsonwebtoken";

export async function createUser(req) {
  const {
    name,
    gender,
    roll,
    email,
    password
  } = req
  const branch = roll.split("/");
  const passingYear = parseInt("20" + branch[1]) + 4;
  const alumni = passingYear < new Date().getFullYear();
  try {
    await connectToDatabase()
    const user = await Users.create({
      name,
      gender,
      roll,
      email,
      password,
      branch: branch[0],
      passingYear:passingYear,
      alumni:alumni,  
    })
    const res = {
      status: "success",
      message: "Signup successfully, Please Login.",
      data: user
    }
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    const res = {
      status: "error",
      message: error.message
    }
    return JSON.parse(JSON.stringify(res));
  }
}
//login
export const loginUser = async (user) => {
  try {
    await connectToDatabase();
    // check if all required fields are provided
    if (!user.password || !user.email) {
      const response = {
        status: false,
        message: "Please provide all required fields",
      };
      return JSON.parse(JSON.stringify(response));
    }
    // check if user enter email or phone number
    if (!user.email) {
      const response = {
        status: false,
        message: "Please provide email or phone number",
      };
      return JSON.parse(JSON.stringify(response));
    }

    // check if user exists
    const existingUser = await Users.findOne({
      email: user.email.toLowerCase(),
    });

    if (!existingUser) {
      const response = {
        status: false,
        message: "User does not exists",
      };
      return JSON.parse(JSON.stringify(response));
    }

    // check if password is correct
    const isMatch = await existingUser.comparePassword(user.password);

    if (!isMatch) {
      const response = {
        status: false,
        message: "Invalid credentials",
      };
      return JSON.parse(JSON.stringify(response));
    }
    const token = jwt.sign(
      {
        id: existingUser._id,
        name: existingUser.name,
        username: existingUser.username,
        email: existingUser.email,
        phone: existingUser.phone,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // if token is not created
    if (!token) {
      const response = {
        status: false,
        message: "Token not created",
      };
      return JSON.parse(JSON.stringify(response));
    }

    //add token to cookies
    const cookie = cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 28), // 7 days
      path: "/",
    });

    // return existing user
    const response = {
      status: true,
      message: "User logged in successfully",
      data: existingUser,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: false,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
};
