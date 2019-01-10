import React from 'react'
import axios from 'axios'
import Files from 'react-files'
import './UploadFiles.css'
import { Button } from 'react-bootstrap';

export class MyDropzone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
    }

    onFilesChange = (files) => {
        this.setState({
            files
        }, () => {
            console.log(this.state.files)
        })
    }

    onFilesError = (error, file) => {
        alert(JSON.stringify(error));
    }

    filesRemoveOne = (file) => {
        this.refs.files.removeFile(file)
    }

    filesRemoveAll = () => {
        this.refs.files.removeFiles()
    }

    filesUpload = () => {
        const formData = new FormData()
        Object.keys(this.state.files).forEach((key) => {
            const file = this.state.files[key]
            formData.append(key, new Blob([file], {type: file.type}), file.name || 'file')
        })

        axios.post(`/files`, formData)
            .then(response => window.alert(`${this.state.files.length} files uploaded succesfully!`))
            .catch(err => window.alert('Files uploaded with some error.'))
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <h2>File Uploader</h2>
                <Files
                    ref='files'
                    className='files-dropzone-list'
                    style={{ height: '100px' }}
                    onChange={this.onFilesChange}
                    onError={this.onFilesError}
                    multiple
                    maxFiles={10}
                    maxFileSize={10000000}
                    minFileSize={0}
                    clickable
                >
                    Drop files here or click to upload
                </Files>
                <br />
                <Button
                    variant="danger"
                    onClick={this.filesRemoveAll}>
                    Remove All Files
                </Button>
                &nbsp;
                <Button
                    variant="primary"
                    onClick={this.filesUpload}>
                    Upload
                </Button>
                {
                    this.state.files.length > 0
                        ? <div className='files-list'>
                        <ul>{this.state.files.map((file) =>
                            <li className='files-list-item' key={file.id}>
                                <div className='files-list-item-preview'>
                                    {file.preview.type === 'image'
                                        ? <img
                                        className='files-list-item-preview-image'
                                        src={file.preview.url}
                                        style={{"height":"10%","width":"10%"}}/>

                                        : <div
                                        className='files-list-item-preview-extension'>{file.extension}</div>}
                                </div>
                                <div className='files-list-item-content'>
                                    <div
                                        className='files-list-item-content-item files-list-item-content-item-1'>{file.name}</div>
                                    <div
                                        className='files-list-item-content-item files-list-item-content-item-2'>{file.sizeReadable}</div>
                                </div>
                                <div
                                    id={file.id}
                                    className='files-list-item-remove'
                                    onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
                                />
                            </li>
                        )}</ul>
                    </div>
                        : null
                }
            </div>
        )
    }
}
//ReactDOM.render(<FilesDemo />, document.getElementById('container'))