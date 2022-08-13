import React from "react";

import Link from "gatsby-link";

import Article from "grommet/components/Article";
import Hero from "grommet/components/Hero";
// import Header from 'grommet/components/Header'
import Title from "grommet/components/Title";
import Heading from "grommet/components/Heading";
import Headline from "grommet/components/Headline";
import Paragraph from "grommet/components/Paragraph";
import Section from "grommet/components/Section";
import Box from "grommet/components/Box";
import Label from "grommet/components/Label";
// import Image from 'grommet/components/Image'
import Columns from "grommet/components/Columns";
import Anchor from "grommet/components/Anchor";
import Split from "grommet/components/Split";
import App from "grommet/components/App";
import Button from "grommet/components/Button";

import DeltaFooter from "../components/Footer";
import DeltaHeader from "../components/Header";
import {
  Modal,
  Header,
  //Button,
  Grid,
  Image,
  Container,
  Reveal,
} from "semantic-ui-react";

var logo = require("../images/logo-official.png");
var blank = require("../images/logo-blank.png");

export default class Submit extends React.Component {
  render() {
    return (
      <div>
        <DeltaHeader />
        <div className="about-hero-container">
          <div className="submit-headers">
            <Heading className="head-text about-h1">SUBMIT TO DELTA</Heading>
            <h2 className="subheader">Send us your best.</h2>
            <h3 className="subheader">
              Fiction, Non-Fiction, Poetry, and More.
            </h3>
          </div>
        </div>
        <div className="app">
          <Article colorIndex="neutral-2">
            <Grid id="submit-article-logo" columns={1}>
              <Grid.Column textAlign="left">
                <Image
                  src={logo}
                  size="small"
                  centered={true}
                  data-aos="fade-down"
                  data-aos-duration="1000"
                />
              </Grid.Column>
            </Grid>
            <Container text textAlign="center">
              <Header
                as="h1"
                className="head-text"
                style={({ padding: "15px" }, { margin: "30px" })}
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                SUBMISSION GUIDELINES
              </Header>
            </Container>
            <Container
              className="head-text submission-guidelines"
              text
              textAlign="justified"
              style={({ padding: "15px" }, { margin: "25px" })}
            >
              <p>
                To submit, you must be an LSU undergraduate. Submissions are
                open to undergrad students of all majors.
              </p>
              <p>What to send and where to send it:</p>
              <ul>
                <li className="submission-guidelines">
                  Submissions can be submitted using the link at the top of the
                  page.
                </li>
                <li className="submission-guidelines">
                  Prose, poetry and screenplays are to be sent as PDF files.
                  These can include excerpts, however they must be able to stand
                  alone as a piece of work.{" "}
                </li>
                <li className="submission-guidelines">
                  Please remove your name from the works that you submit.
                </li>
              </ul>
              <Container text className="head-text submission-guidlines">
                <h2 className="head-text">PROSE</h2>
                <Box pad="medium" margin="small">
                  <p>
                    Prose includes short fiction, flash fiction, and nonfiction.
                    Students may submit up to two stories of prose, totaling no
                    more than 7,000 words (combined).
                  </p>
                </Box>
              </Container>
              <Container text className="head-text submission-guidlines">
                <h2 className="head-text">POETRY</h2>
                <Box pad="medium" margin="small">
                  <p>
                    Students may submit multiple pieces. Up to five pages of
                    poetry total; No more than one poem per page. We’re also
                    open to handwritten poetry submissions if the fact that
                    they’re handwritten is important to the artistic statement
                    of the piece.
                  </p>
                </Box>
              </Container>
              <Container text className="head-text submission-guidlines">
                <h2 className="head-text">SCREENWRITING</h2>
                <Box pad="medium" margin="small">
                  <p>Submitted screenplays may be no more than 10 pages.</p>
                </Box>
              </Container>
              <Container text className="head-text submission-guidlines">
                <h2 className="head-text">VISUAL ART</h2>
                <Box pad="medium" margin="small">
                  <p>
                    We accept both traditional and digital art, including
                    photography, comics, cartoons, and photographs of
                    3-dimensional art such as sculptures.
                  </p>

                  <p>
                    One piece will be selected to be featured on the Delta
                    Journal’s cover and all other selected pieces will be
                    included inside the journal.
                  </p>
                  <ul className="submission-guidelines">
                    <li className="submission-guidelines">
                      1536 x 1024 pixels minimum for digital art submissions
                      (share on Google Drive with the LSU Delta Gmail account:
                      lsudelta@gmail.com)
                    </li>
                    <li className="submission-guidelines">
                      Artists may submit up to 3 different pieces.
                    </li>
                  </ul>
                </Box>
              </Container>
            </Container>
            <div
              className="submit-box"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="inner-submit-box-2">
                <Container textAlign="center">
                  <Header as="h2" className="head-text" id="submit-box-header">
                    Submissions open Spring 2019.
                  </Header>
                  <Container textAlign="center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlnZfPrymgMwCfWACreMKhstDM8RqdbJNYvvD4qdhm8bw0qw/viewform">
                      <Button
                        style={{ margin: "30px" }}
                        className="head-text submit-button"
                        primary={true}
                        //basic
                        // color="teal"
                        //size="massive"
                      >
                        SUBMIT
                      </Button>
                    </a>
                  </Container>
                  <Header.Subheader
                    as="h3"
                    className="body-text"
                    id="submit-box-header"
                    // style={{padding:'15px'}, {margin: '10px'}}
                  >
                    Please read our submission guidelines above before
                    submitting. &nbsp;
                  </Header.Subheader>
                </Container>
              </div>
            </div>
          </Article>
        </div>
        <DeltaFooter />
      </div>
    );
  }
}
