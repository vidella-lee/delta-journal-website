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

export default class Events extends React.PureComponent {
  render() {
    return (
      <Article colorIndex="neutral-3">
        <DeltaHeader />
        <Container className="event-page" textAlign="center">
          <Container
            id="event-header-box"
            textAlign="center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1 className="event-head">Contact Us</h1>
          </Container>
          <div>
            <Container className="event-box">
              <h2 className="subheader" id="event-subheader">
                Office located @:
              </h2>
              <Container fluid={true} text className="event-text">
                <p className="event-description">
                  LSU Baton Rouge, LA 70803
                  <br />
                  214A Allen Hall
                </p>
              </Container>
              <h2 className="subheader" id="event-subheader">
                Email us @:
              </h2>
              <Container fluid={true} text className="event-text">
                <p className="event-description">deltajournal@gmail.com</p>
              </Container>
              <Container className="event-icon-group">
                <h3 className="subheader"> Find us on:</h3>
                <a
                  className="icon-link"
                  href="https://www.facebook.com/DeltaLiteraryJournal"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <Icon size="huge" name="facebook square" />
                </a>
                <a
                  className="icon-link"
                  href="https://www.instagram.com/deltajournal/"
                  data-aos="fade-down"
                  delay="1000"
                  data-aos-duration="1000"
                >
                  <Icon size="huge" name="instagram" />
                </a>
                <a
                  className="icon-link"
                  href="https://twitter.com/deltajournal"
                  data-aos="fade-down"
                  delay="500"
                  data-aos-duration="1000"
                >
                  <Icon size="huge" name="twitter square" />
                </a>
              </Container>
            </Container>
          </div>
        </Container>
        <DeltaFooter />
      </Article>
    );
  }
}
