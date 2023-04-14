import { FileUploadService } from "../services/fileUploadService.js";

export class FileUploadController {
  static async handleFileUpload(req, res, next) {
    const {files} = req;
    try {
      const fileStr = files[0].buffer.toString();
      const resp = await FileUploadService.handleFileUpload(fileStr);
      res.status(200).send({'data': resp});
    } catch(err) {
      res.status(500).send({'message': err.message});
    }
  }
}