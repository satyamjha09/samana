// helpers/uploadImage.js
const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "mern-product");

  try {
    console.log('Uploading to URL:', url);
    const dataResponse = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!dataResponse.ok) {
      const errorData = await dataResponse.json();
      console.error('Error response from Cloudinary:', errorData);
      throw new Error('Failed to upload image to Cloudinary');
    }

    const responseData = await dataResponse.json();
    console.log('Upload successful:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export default uploadImage;
