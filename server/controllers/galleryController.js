import Gallery from "../models/Gallery.js";


// Get All Photos
export const getPhotos = async (req, res) => {
  try {

    const photos = await Gallery.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: photos
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching photos",
      error: error.message
    });

  }
};



// Upload Photo
export const uploadPhoto = async (req, res) => {

  try {

    const { imageUrl } = req.body;

    const photo = new Gallery({
      imageUrl
    });

    const savedPhoto = await photo.save();

    res.status(201).json({
      success: true,
      message: "Photo uploaded successfully",
      data: savedPhoto
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error uploading photo",
      error: error.message
    });

  }

};



// Delete Photo
export const deletePhoto = async (req, res) => {

  try {

    const { id } = req.params;

    await Gallery.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Photo deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error deleting photo",
      error: error.message
    });

  }

};