import React from 'react';

import { connect } from 'react-redux';

import { upload } from '../../../../actions/helper/helperActions';
import './Upload.css';

class Uploader extends React.Component{
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      selectedFile: null
    }
  }

 

  handleUploader(e){
    this.fileInput.current.click();
  }

  onChangeHandler(e){
    this.setState({
      selectedFile: e.target.files[0]
    })
    console.log(e.target.files[0]);
  }

  UploadHandler(){
    let data = new FormData();
    data.append('file', this.state.selectedFile)
    data.append('user', this.props.user.dashBoardUser)
    upload(data)
  }

  render(){
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
          <input 
          type="file"
          name="file" 
          className="form-control" 
          style={{ display: 'none' }}
          onChange={this.onChangeHandler.bind(this)} 
          ref={this.fileInput}
        />
          <button id="btn" onClick={this.handleUploader.bind(this)}>UPLOAD YOUR CV</button>
          {/* <button id="btn" onClick={this.UploadHandler.bind(this)}>UPLOAD</button> */}
        </div>
        </div>
      </div>
    )
  }
  
}

// export default Uploader;

const MapStateToProps = (state) => {
  return {
    user: state.userState
  }
}

export default connect(MapStateToProps)(Uploader);