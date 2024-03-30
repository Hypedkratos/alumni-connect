'use server'
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });


export async function uploadImage(base64url){
    try {
        const res = await cloudinary.uploader.upload(base64url)
        const image = {
          public : res.public_id,
          image_url: res.secure_url
        }

        return JSON.parse(JSON.stringify(image))
    } catch (error) {
      console.log(error.message)
    }
}
export async function deleteImage(imageId){
    try {
        const res = await cloudinary.uploader.destroy(imageId)
        console.log(res)
    } catch (error) {
      console.log(error.message)
    }
}