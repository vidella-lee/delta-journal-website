import React from 'react'

import Article from 'grommet/components/Article'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box';
import Link from 'gatsby-link';
import Label from 'grommet/components/Label';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import Anchor from 'grommet/components/Anchor';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Hero from 'grommet/components/Hero';
import Carousel from 'grommet/components/Carousel';

var delta1 =  require('../images/archives-pics/delta-1.png');
var delta60 = require('../images/archives-pics/delta60.jpg');
var delta58 = require('../images/archives-pics/delta58.jpg');

import DeltaFooter from '../components/Footer';
import DeltaHeader from '../components/Header';


export default class Test extends React.Component {
	render(){
	  return(
	    <div>
      <DeltaHeader />
	    <Carousel
		 	   autoplay={ false }
		 	   className='archives-carousel'

		 	  >
		 	   
		  <Tiles
           flush={ false }>
	        <Tile>
	          <Box>
	          <Image src={ delta60 } />
	          <Label align='center'> Delta Volume 60 </Label>
	          </Box>
	         </Tile>
	        <Tile>
	          <Box>
	          <Image src={ delta1 } />
	          <Label align='center'> Delta Volume 59 </Label>
	          </Box>
	         </Tile> 
	        <Tile>
	          <Box>
	          <Image src={ delta58 } />
	          <Label align='center'> Delta Volume 58 </Label>
	          </Box>
	         </Tile>
	        
	        <Tile>
	          <Box>
	          <Image src={ delta1 } />
	          <Label align='center'> Delta Volume 57 </Label>
	          </Box>
	         </Tile>
	        <Tile>
	          <Box>
	          <Image src={ delta1 } />
	          <Label align='center'> Delta Volume 56 </Label>
	          </Box>
	         </Tile>
	        <Tile>
	          <Box>
	          <Image src={ delta1 } />
	          <Label align='center'> Delta Volume 55 </Label>
	          </Box>
	         </Tile>

	        <Tile>
	          <Box>
	          <Image src={ delta1 } />
	          <Label align='center'> Delta Volume 54 </Label>
	          </Box>
	         </Tile>
	        <Tile>
	          <Box>
	          <Image src={ delta1 } />
	          <Label align='center'> Delta Volume 53 </Label>
	          </Box>
	         </Tile> 
	        <Tile>
	          <Box>
	          <Image src={ delta1 } />
	          <Label align='center'> Delta Volume 52 </Label>
	          </Box>
	         </Tile>
	    
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 51 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 50 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 49 </Label>
               </Box>
              </Tile>
	  </Tiles>

            <Tiles
	         flush={ false }>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 48 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 47 </Label>
               </Box>
              </Tile> 
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 46 </Label>
               </Box>
              </Tile>
             
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 45 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 44 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>

             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile> 
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>             
	  </Tiles>
	      <Tiles
             flush={ false }
             >
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile> 
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>

             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile> 
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>             
	  </Tiles>
	   <Tiles
	   flush={ false }>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile> 
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>

             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile> 
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>             
	  </Tiles>
	   <Tiles
	   flush={ false }>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile> 
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>

             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile> 
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>
             <Tile>
               <Box>
               <Image src={ delta1 } />
               <Label align='center'> Delta Volume 1 </Label>
               </Box>
              </Tile>             
	  </Tiles>
	  </Carousel>
    </div> 
		)
	}
}
 
	