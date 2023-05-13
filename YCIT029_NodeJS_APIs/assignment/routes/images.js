import express from "express";
import {
  createImage,
  getAllImages,
  getImageById,
  updateImage,
  deleteImage,
} from "../services/imagesService.js";
// authorization middleware
import authorize from "../middleware/auth.js";
// enforce JSON format for PUT and POST requests (except for the image upload)
import enforceJsonFormat from "../middleware/enforceJSONformat.js";
// axios to make the get request to the image url
import axios from "axios";
// nanoid to create a unique id for the image
import { nanoid } from "nanoid";

const router = express.Router();
export default router;

// create/add a new image from the createImage function
router.post("/", authorize("write"), async (req, res) => {
  // make the axios get request to the NASA API using the api key in the query string
  try {
    const response = await axios.get(
      // use the "date" (in YYYY-MM-DD format) query string to get the image for a specific date
      "https://api.nasa.gov/planetary/apod?api_key=i1Ts48jN95npRrNQRIDjcZIXopIOPtSdhavxFP1K&date=2001-01-01"
    );

    const data = {
      id: nanoid(),
      title: response.data.title,
      date: response.data.date,
      explanation: response.data.explanation,
      url: response.data.url,
      media_type: response.data.media_type,
    };
    //console.log(data);

    await createImage(data);

    // send the new image data to the client
    res.status(201).json({
      message:
        "the following image has been posted to the images database; you may open the URL in a browser",
      id: data.id,
      title: response.data.title,
      date: response.data.date,
      explanation: response.data.explanation,
      url: response.data.url,
      media_type: response.data.media_type,
    });
  } catch (error) {
    // log the error to the console in case of the axios get request failing
    console.error(error);
    // send the error to the client
    res.status(500).json({ error: "Error fetching image from NASA API" });
  }
});

// read/get all images from getAllImages function
router.get("/", authorize("read"), async (req, res) => {
  const image = await getAllImages();
  res.status(200).json(image);
});

// // read/get an image by id. The id is given by the nanoId function
// the selected image will be opened in the default browser using the imagesService.js file
router.get("/:id", authorize("read"), async (req, res) => {
  const image = await getImageById(req.params.id);
  res.status(200).json({
    message:
      "Here are the image details for your selection. The image will open in your default browser.",
    image,
  });
});

// update an image by id. The id is given by the nanoId function
// the axios get request to retrieve the new image data
// then update the image data with the new image data
// using the enforceJsonFormat middleware to enforce JSON format on this route
router.put("/:id", authorize("write"), enforceJsonFormat, async (req, res) => {
  const { id } = req.params;
  const { title, date, explanation, url, media_type } = req.body;

  if (!title || !date || !explanation || !url || !media_type) {
    return res.status(400).json({
      message:
        "Insufficient fields to update; please provide the title, date, explanation, url and media type in JSON format",
    });
  }

  const updatedImage = await updateImage(id, req.body);

  if (!updatedImage) {
    res.status(404).json({ message: "Image not found" });
  } else {
    res.status(200).json({
      message: "The image has been update with the following:",
      updatedImage,
    });
  }
});

// delete an image by id. The id is given by the nanoId function
router.delete("/:id", authorize("delete"), async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await deleteImage(id);

    if (!deleted) {
      return res.status(404).json({ message: "Image not found" });
    } else {
      return res
        .status(201)
        .json({ message: "The following image has been deleted", deleted });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the image" });
  }
});
