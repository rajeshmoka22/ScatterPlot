import csv from 'csvtojson';

export class FileUploadService {
  static async handleFileUpload(fileStr) {
    try {
      const jsonArray = await csv().fromString(fileStr);
      return jsonArray;
    }catch(err) {
      throw Error(err.message);
    }
  } 
}