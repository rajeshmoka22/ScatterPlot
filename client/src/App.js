import React from 'react';
import {observer} from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import { FileUpload } from './components/fileupload/FileUpload';
import { ScatterPlot } from './components/ScatterPlot/ScatterPlot';
import { LABELS } from './utils/labels';

function App(props) {
  const {store,
  store: {
    uploadOperationService
  }} = props;
  return (
    <>
      <h1 className="px-5 py-3 bg-primary text-white">{LABELS.scatterPlot}</h1>
      <div className="d-flex justify-content-evenly m-5 mt-2 flex-wrap">
        <div className="mt-3">
          <FileUpload store={store}/>
        </div>
        <div className="mt-3">
          <ScatterPlot data={uploadOperationService.payload || []}/>
        </div>
        
      </div>
    </>
  );
}

export default observer(App);
