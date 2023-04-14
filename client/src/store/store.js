import { makeAutoObservable } from 'mobx';
import builder from '../utils/builder';
import { DOMAIN, ENDPOINTS } from '../utils/constants';
import { OperationState } from '../utils/operationState';

class Store {
  fileTobeUploaded = null;
  uploadOperationService = new OperationState('file-upload');
  constructor() {
    makeAutoObservable(this);
  }

  setFile = (file) => {
    this.fileTobeUploaded = file;
  }

  get file() {
    return this.fileTobeUploaded;
  }

  removeFile = () => {
    this.fileTobeUploaded = null;
  }

  uploadFile= async() => {
    //handle upload logic here
    this.uploadOperationService.start();
    const url = builder.setDomain(DOMAIN).setPath(ENDPOINTS.fileUpload).finish();
    console.log(url);
    const formData = new FormData();
		formData.append('csv-file', this.fileTobeUploaded);
    try {
      const resp = await fetch(url, {
        body: formData,
        method: 'POST'
      })
      const parsedResp = await resp.json();
      this.uploadOperationService.end(parsedResp.data || []);
    } catch(err) {
      this.uploadOperationService.fail(err.message);
    }
  }
}

const storeInstance = new Store();
export default storeInstance;