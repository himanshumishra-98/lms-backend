import {v2 as cloudinary} from "cloudinary";
import { config } from "dotenv";
config();
import ApiError from "../utils/ApiError.js";

const connectToCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    
    console.log("Connected to Cloudinary successfully!");
  } catch (error) {
    throw new ApiError(500,`Error connecting to Cloudinary: ${error.message}`);
  }
}

export default connectToCloudinary;