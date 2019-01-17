import React from 'react'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Heading from 'grommet/components/Heading'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Link from 'gatsby-link'
import Label from 'grommet/components/Label'
import Columns from 'grommet/components/Columns'
import Anchor from 'grommet/components/Anchor'
import Split from 'grommet/components/Split'

import {
	Grid,
	Image,
	Container,
	Icon 
} from 'semantic-ui-react'

import DeltaFooter from '../components/Footer'
import DeltaHeader from '../components/Header'

var delta60Pic = require('../images/delta60.jpg')
var cover = require('../images/cover-art.jpg')

export default class Delta60 extends React.PureComponent {
	render(){
		return(
			<div>
				<DeltaHeader />
				<div className='delta60-page'>
					<div className='delta60-headline'>
						<h1 className='head-text' style={{marginBottom: '0px'}}>
							Delta Volume 60
						</h1>
						<h2 className='head-text'>
							Spring 2018
						</h2>
					</div>
					<div className='delta-60-box '>
							<div className='delta60-editors'>
							
							
							<p>
							<h3 className='head-text'>Editors-in-chief:</h3>
								Liz Nelson - Prose
								<br/>
								Nayyir Ransome - Poetry
							</p>
							
							<p>
							<h3 className='head-text'>Prose Editors:</h3>
								Torrance Thomas
								<br/>
								Mackenzie Treadwell
								<br/>
								Alexandra Cravins
								<br/>
								Charlotte Wittenbrink
								<br/>
								Ashlynn Buzbee
								<br/>
								Zachary Roubein
								<br/>
								Grace Galeziewski
								<br/>
								Matthew Myers
								<br/>
								Chelsea Bell
							</p>
							
							<p>
							<h3 className='head-text'>Poetry Editors:</h3>
								Antawn Amos
								<br/>
								Garret Baringer
								<br/>
								Kate Gauthreaux
								<br/>
								Shane Breaux
								<br/>
								Emily Higginbotham
							</p>
						</div>

							<Image
					 	 	 className='delta60-pic'
					 	 	 src={ delta60Pic }
					 	 	 // centered={ true }
					 	 	 size='huge'
					 	 	 inline={true}
					 	 	 // circular={ true } 
					 		/>
					 		
					 	<div className='featured-list'>
					 	<Image
					 	 	 className='delta60-cover-pic'
					 	 	 src={ cover }
					 	 	 // centered={ true }
					 	 	 size='large'
					 	 	 // inline={true}
					 	 	 // circular={ true } 
					 		/>
					 		<div className='featured-writers'>
					 			<h2 className='head-text'>Featured Writers</h2>
					 			<p className='body-text'>
					 				Jennifer Burleigh
					 				<br/>
					 				Torrance Thomas
					 				<br/>
									Jackson Mierl
									<br/>
									Jordan Lahaye
									<br/>
									Rebecca Dill
									<br/>
									Abigail Babin
									<br/>
									Miles Jordan
									<br/>
									Antawn Amos
									<br/>
									Rebecca Barnett
									<br/>
									Ashlynn Buzbee
									<br/>
									Michael Frank
									<br/>
									Madison Hadden
									<br/>
									Hayden Rigby
									<br/>
									Kendall James
									<br/>
									Robert Jones
					 			</p>
					 		</div>
					 		<div className='featured-artists'>
								<h2 className='head-text'>Featured Artists</h2>
					 			<p className='body-text'>
									<span className='head-text'>Caroline Blanchett</span>*
									<br/>
									Brady Connelly
									<br/>
									Natalie Clark
									<br/>
									KK McCarley
									<br/>
									Afsaneh Ghazavi
									<br/>
									<br/>
									<br/>
									<br/>
									<br/>
									<br/>
									<br/>
									<br/>
									<br/>
									<br/>
									*Cover artist

					 			</p>
					 	</div>
					 	
					</div>
					
					</div>
				</div>
			<DeltaFooter />
			</div>
		)
	}
}