import React from 'react'

import Link from 'gatsby-link'
import {
	Grid,
	Image,
	Container,
	Icon 
} from 'semantic-ui-react'

import DeltaFooter from '../components/Footer'
import DeltaHeader from '../components/Header'

var coffee = require('../images/coffeecup.png');
var logo = require('../images/logo-official.png');

export default class Contact extends React.PureComponent {
	render(){
		return(
			<div>
				<DeltaHeader />
					<div className='contact-page'>
						<div className='contact-border'>
							<div className='contact-headline'>
									<h1 className='head-text'>
										Contact Us
									</h1>
								</div>
						<div>
						<div className='contact-box'>
							<div className='inner-contact-box-1'>
								<h3 className='body-text'>Office located @:</h3>
								<p className='body-text contact-text'>
									LSU Baton Rouge, LA 70803
									<br />
									214A Allen Hall 
								</p>
							</div>
							<div className='inner-contact-box-2'>	
								<h3 className='body-text'> Email us @:</h3>
								<p className='body-text contact-text'>
									deltajournal@gmail.com
								</p>
							</div>
							<div className='inner-contact-box-3'>
								<h3 className='body-text'> Find us on:</h3>
								<div className='icon-group'>
		    					<a href='https://www.facebook.com/DeltaLiteraryJournal'>
									<Icon 
									 size='big'
									 name='facebook square' />
								</a>	
								<a href='https://www.instagram.com/deltajournal/'> 
									<Icon 
									 size='big'
									 name='instagram' />
								</a>	 
								<a href='https://twitter.com/deltajournal'>	 
									<Icon 
									 size='big'
									 name='twitter square' />
  								</a>
		    				</div>
							</div>
						</div>
					</div>
					</div>

					</div>		
			<DeltaFooter />
			</div>
		)
	}
}