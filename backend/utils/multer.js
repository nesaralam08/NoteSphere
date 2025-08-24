const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "notesphere", 
    resource_type: "auto", 
    allowed_formats: ["jpg", "png", "jpeg", "pdf", "docx"], 
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage ,limits: { fileSize: 50 * 1024 * 1024 }});

module.exports = upload;
