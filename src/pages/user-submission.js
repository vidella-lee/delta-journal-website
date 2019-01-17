import React from 'react'
import axios from 'axios'

import {
	Container,
	Header, 
	Button,
	Checkbox,
	Form,
	Modal 
} from 'semantic-ui-react'

const endpoint = 'http://localhost:8000/upload/'

export default class UserSubmission extends React.Component {
	constructor() {
    	super();
    	this.state = {
    		selectedFile: null, loaded: 0,
    	}
    }
    	handleselectedFile = event => {
    		this.setState({
    			selectedFile: event.target.files[0],
    			loaded: 0,
    		})
    	}
    	handleUpload = () => {
    		const data= new FormData()
    		data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    		axios
    			.post(endpoint, data, {
    				onUploadProgress: ProgressEvent => {
    					this.setState({
    						loaded: (ProgressEvent.loaded / ProgressEvent.total)*100,
    					})
    				},
    			})
    			.then(res => {
    				console.log(res.statusText)
    			})
    	}

	render(){
		return(
			<div className='app'>
				<input type='file' name='' id='' onChange={this.handleselectedFile} />
				<Button onClick={this.handleUpload}>Upload</Button>

				<div> {Math.round(this.state.loaded,2) } %</div>
			</div>
			)
	}
}