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
            <h1 className="event-head">Events</h1>
          </Container>
          <div>
            <Container className="event-box">
              <h2 className="subheader" id="event-subheader">
                Get Involved!
              </h2>
              <Container text className="event-text">
                <p id="event-description">
                  Celebrate, support, and participate in Baton Rouge and LSU's
                  literary and creative communities. Check here to keep up with
                  upcoming Delta events like fundraisers, readings, workshops,
                  etc. and follow us on social media for updates!
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
                <Container as="div" className="event-card">
                  <Image
                    size="small"
                    src={readingPic}
                    // floated='left'
                    circular={true}
                    href="../highland-coffee-readings"
                  />
                  <a
                    style={{ color: "#EEF2F6" }}
                    href="../highland-coffee-readings"
                    className="event-card-link"
                  >
                    <h3 className="head-text">
                      Highland Coffees Reading Series
                    </h3>
                  </a>
                  <Container className="event-card-text">
                    <p>
                      An open mic for poetic souls and storytellers. Twice a
                      month.
                    </p>
                  </Container>
                </Container>
                <Container className="event-card">
                  <Image
                    //size="tiny"
                    size="small"
                    src={cloudGradient}
                    // floated='left'
                    circular={true}
                    href="#"
                  />
                  <a
                    style={{ color: "#EEF2F6" }}
                    href="../highland-coffee-readings"
                    // className='underline-a'
                  >
                    <h3 className="head-text">
                      {" "}
                      Legend-LARPing Costume Party{" "}
                    </h3>
                  </a>
                  <Container className="event-card-text">
                    <p>
                      Come dressed as your favorite literary icon. Details
                      coming soon!
                    </p>
                  </Container>
                </Container>
              </Box>
            </Container>
          </div>
        </Container>
        <DeltaFooter />
      </Article>
    );
  }
}
