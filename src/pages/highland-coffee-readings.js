import React from "react";
import Article from "grommet/components/Article";
import Heading from "grommet/components/Heading";
import Headline from "grommet/components/Headline";
import Paragraph from "grommet/components/Paragraph";
import Section from "grommet/components/Section";
import Box from "grommet/components/Box";
import Link from "gatsby-link";
// import Image from 'grommet/components/Image'
import Anchor from "grommet/components/Anchor";
import App from "grommet/components/App";
// import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
// import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
// import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';

import DeltaFooter from "../components/Footer";
import DeltaHeader from "../components/Header";

import { Grid, Image, Container, Icon } from "semantic-ui-react";

var readingPic = require("../images/mic.png");
var cloudGradient = require("../images/cloud-gradient.png");
var shakespeare = require("../images/shakespeare2.jpg");
var readingPic = require("../images/reading-1ba.jpg");

export default class Events extends React.PureComponent {
  render() {
    return (
      <Article colorIndex="neutral-3">
        <DeltaHeader />
        <Container className="event-page" textAlign="center">
          <Container
            id="event-header-box"
            textAlign="center"
            animation="fadeIn"
          >
            <h1 className="event-head">The Highland Coffee Reading Series</h1>
          </Container>
          <div>
            <Container className="event-box">
              <h2 className="subheader" id="event-subheader">
                Organized by Writers, For Writers, to Support Writers.
              </h2>
              <Container text className="event-text">
                <p id="event-description">
                  Come share your writing with Delta and other LSU literary
                  creatives. If you'd like to read, please contact us at
                  deltajournal@gmail.com or message us on
                  <Anchor
                    href="https://www.facebook.com/DeltaLiteraryJournal/"
                    label=" Facebook"
                    color="neutral-1"
                  ></Anchor>
                </p>
              </Container>
              <Container className="event-icon-group">
                <a
                  className="icon-link"
                  href="https://www.facebook.com/DeltaLiteraryJournal"
                >
                  <Icon size="huge" name="facebook square" />
                </a>
                <a
                  className="icon-link"
                  href="https://www.instagram.com/deltajournal/"
                >
                  <Icon size="huge" name="instagram" />
                </a>
                <a
                  className="icon-link"
                  href="https://twitter.com/deltajournal"
                >
                  <Icon size="huge" name="twitter square" />
                </a>
              </Container>
              <Box direction="row">
                <Image className="rounded-corner-img" src={readingPic} />
              </Box>
            </Container>
          </div>
        </Container>
        <DeltaFooter />
      </Article>
    );
  }
}
