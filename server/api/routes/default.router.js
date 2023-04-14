import { Router } from "express";
import multer from "multer";
import { FileUploadController } from "../../controllers/fileUploadController.js";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload-file', upload.array('csv-file',1),  FileUploadController.handleFileUpload);

export default router;