import React from 'react'
import { 
	Button,
	Checkbox,
	Form,
	Modal 
} from 'semantic-ui-react'

export default class SubmissionForm extends React.Component {
	render(){
	  return(
	  	<div>
	  	<Modal>
	  		<Form>
	  			<Form.Field>
      				<label>Full Name</label>
      				<input placeholder='FirstName LastName' />
    			</Form.Field>
    			<Form.Field>
      				<label>Cover Letter</label>
      				<input placeholder='Upload cover letter' />
    			</Form.Field>
    			<Form.Field>
      				<label>Documents</label>
      				<input placeholder='Upload your submission' />
    			</Form.Field>
    			<Button type='submit'>Submit</Button>
	  		</Form>
	  	</Modal>
	  	</div>
	  	)
	}
}