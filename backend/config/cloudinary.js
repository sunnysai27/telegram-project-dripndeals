import {v2 as cloudinary} from "cloudinary";

const connectCloudinay = async () => {

    cloudinary.config({
        cloud_name : process.env.CLOUDINARY_NAME,
        api_key : process.env.CLOUDINARY_API_KEY,
        api_secret : process.env.CLOUDINARY_SECRET_KEY
    });

}

const uploadImageToCloudinary = async (localFilePath) => {
    try {
        const result = await cloudinary.uploader.upload(localFilePath , {
            resource_type: "image",
            folder: 'telegram-images',
        });
        return result.secure_url;

    } catch (error) {
        console.error('❌ Cloudinary Upload Error:', error);
        return null;
    }
}


export {connectCloudinay, uploadImageToCloudinary};