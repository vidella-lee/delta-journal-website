import React from "react";
import Card from "grommet/components/Card";
import Anchor from "grommet/components/Anchor";

export default class FeatureCard extends React.PureComponent {
  render() {
    const { cardImg, label, heading, description, link, linkLabel } =
      this.props;
    return (
      <div className="card">
        <Card
          thumbnail={cardImg}
          label={
            <a className="header-link" href={link}>
              {label}
            </a>
          }
          heading={heading}
          description={
            <p className="feature-card-description">{description}</p>
          }
          //colorIndex='neutral-2'
          textSize="small"
          contentPad="large"
          link={<Anchor className="card-link" href={link} label={linkLabel} />}
        />
      </div>
    );
  }
}
