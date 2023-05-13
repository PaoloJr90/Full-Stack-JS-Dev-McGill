import { imagesDb } from "../db.js";
// open package to open the image url in the default browser
import open from "open";

// create/add a new image to the imagesDb_images.json file
// the image data will be returned to the client
export async function createImage(image) {
  imagesDb.data.images.push(image);
  await imagesDb.write();

  return image;
}

// read/get all images from imagesDb_images.json function
export async function getAllImages() {
  console.log(imagesDb.data.images);
  return imagesDb.data.images;
}

// read/get an image by id from the imagesDb_images.json file
// the image data will be returned to the client
// the image url will be opened in the default browser
export async function getImageById(imageID) {
  const image = imagesDb.data.images.find((h) => h.id === imageID);

  if (image) {
    try {
      // open the image url in the default browser
      async function openImage() {
        await open(image.url);
      }

      // call the openImage function to open the image url in the default browser
      await openImage();

      return image;
    } catch (error) {
      throw new Error("Error opening image URL");
    }
  }
}

// update an image by id. id is given by the nanoId function
export async function updateImage(id, updates) {
  const image = imagesDb.data.images.find((h) => h.id === id);

  if (!image) {
    return null;
  }

  Object.assign(image, updates);
  await imagesDb.write();
  return image;
}

// delete an image by id. id is given by the nanoId function
export async function deleteImage(id) {
  const imageIndex = imagesDb.data.images.findIndex((h) => h.id === id);

  const deletedImage = imagesDb.data.images.find((h) => h.id === id);

  if (imageIndex === -1) {
    return false;
  }

  imagesDb.data.images.splice(imageIndex, 1);
  await imagesDb.write();
  return deletedImage;
}
