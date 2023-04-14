import React from 'react';
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { LABELS } from '../../utils/labels';
import './styles.css';
import { CrossIcon, UploadIcon } from '../icons';

export const FileUpload = observer((props) => {
  const { 
    store: {
      uploadOperationService,
      setFile,
      file,
      removeFile,
      uploadFile
    }
  } = props;

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    e.target.value = null;
  }

  const Loader = () => (
    uploadOperationService.pending ? (
      <div className="d-flex align-items-center">
        <CircularProgress />
        <div className="mx-4">{LABELS.uploading}</div>
      </div>
    ) : null
  )
  return (
    <div id="fileupload-container" className="fileupload-container">
      <h2>{LABELS.uploadFile}</h2>
      {uploadOperationService.error ? (
        <div className="text-white mb-2 d-flex justify-content-between align-items-center bg-danger p-2 rounded">
          <span>{uploadOperationService.error}</span>
          <span onClick={uploadOperationService.reset} className="crossIcon px-2 py-1 cursor-pointer"><CrossIcon /></span>
        </div>
      ) : ''}
      <form>
        <div className="upload-input d-flex flex-column">
          <label className="fileuploadBtn d-flex align-items-center justify-content-center flex-column rounded" htmlFor="csv-file">
            <UploadIcon />
            <strong className="mt-3">{LABELS.chooseFile}</strong>
          </label>
          <input className="d-none" id="csv-file" name="csv-file" type="file" accept=".csv" onChange={handleUpload} disabled={uploadOperationService.pending} />
        </div>
        <p className="text-muted">{LABELS.acceptedFiles}</p>
        {file ? (<div className="file-list mt-3 d-flex justify-content-between align-items-center bg-secondary p-2 text-white rounded">
          <strong>{file.name}</strong>
          <span onClick={removeFile} className="crossIcon px-2 py-1"><CrossIcon /></span>
        </div>) : null}
        <Button className="mt-3 px-3 py-2" variant="contained" disabled={uploadOperationService.pending || !file} onClick={uploadFile}>
          {
            uploadOperationService.pending ? (
              <Loader />
            ) : LABELS.upload
          }
        </Button>
      </form>
    </div>
  )
});