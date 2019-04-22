import React from 'react';

import './Upload.css';

function Uploader(){
  return (
    <div id="uploader-main">
      <div id="upload-layout">
      <section>
        <p>
        Drag and drop your CV here to upload a file.
         For best results, upload in PDF format
        </p>
        <br />
        <span>(Maximum: 5MB)</span>
      </section>
      <div>
        <button id="btn">UPLOAD YOUR CV</button>
      </div>
      </div>
    </div>
  )
}

export default Uploader;