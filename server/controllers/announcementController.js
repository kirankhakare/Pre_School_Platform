import Announcement from "../models/Announcement.js";


// CREATE
export const createAnnouncement = async (req, res) => {

  try {

    const { title, message, target } = req.body;

    const newAnnouncement = new Announcement({
      title,
      message,
      target
    });

    const saved = await newAnnouncement.save();

    res.json({
      success: true,
      data: saved
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};



// GET ALL
export const getAnnouncements = async (req, res) => {

  try {

    const announcements = await Announcement.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: announcements
    });

  } catch (error) {

    res.status(500).json({
      success: false
    });

  }

};



// DELETE
export const deleteAnnouncement = async (req, res) => {

  try {

    await Announcement.findByIdAndDelete(req.params.id);

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json({
      success: false
    });

  }

};