import React from 'react';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Label from 'grommet/components/Label';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import Link from 'gatsby-link'

export default class DeltaFooter extends React.PureComponent {
  render(){
    return (
      <div className="sub-head-text">
        <Footer 
          justify='between' 
          colorIndex="neutral-3"
          fixed={true}
          size="large" 
        >
          <Box margin={{left: 'large'}}>
            <a href='https://www.lsu.edu/' className='underline-a'>
            <s />
              Louisiana State University
            </a>
          </Box>
          <Box
             direction='row'
             responsive={ false }
             align='center'
             pad={{"between": "small"}}
            >
              <a href='https://www.facebook.com/DeltaLiteraryJournal/'>
                <SocialFacebookIcon colorIndex='neutral-1'/>
              </a>
              <a href='https://www.instagram.com/deltajournal/'>
                <SocialInstagramIcon colorIndex='neutral-1'/>
              </a>
              <a href='https://twitter.com/deltajournal'>
                <SocialTwitterIcon colorIndex='neutral-1'/>
              </a>
            </Box>   
          <Box 
           direction='row'
           align='center'
           pad={{"between": "medium"}}
          >
            
            <Paragraph margin='none'>
              2018 Delta Literary Journal
            </Paragraph>

        <Box margin={{right: 'large'}}>
        <Menu direction='row'
        size='small'
        dropAlign={{"right": "right"}}>

        <Link to='/contact/' className='underline-a'>
          Contact Us
        </Link>

        </Menu>
        </Box>
        </Box>
        </Footer>
        </div>
        )
  }
}
