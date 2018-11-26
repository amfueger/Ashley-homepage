import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { VideoScroll } from "react-video-scroll";
import { Image } from "semantic-ui-react";

class AboutMe extends React.Component {
  constructor() {
    super();

    this.state = {
      currentFrame: 0
    };
  }

  // const onScroll = (props) => {
  // const { currentFrame } => props
  // this.setState({ frame: Math.floor(currentFrame)})
  // }

  render() {
    return (
      <div className="aboutme">
        <video
        className="video-smoke"
        autoplay="true"
        >
          <source type="video/mp4" source="./imgs/smoke.mp4" />
        </video>

        <Image
        	className="logo"
          src="./imgs/AshleyFinal.jpg"
          size="medium"
          verticalAlign="middle"
          circular
        />
        <h2>About Me</h2>
        <p>
          With a background in operations and project management, my move into
          software engineering gives me both a granular and big picture
          perspective of product. Being a careful observer who cares deeply
          about the architecture of decision-making, I’m a great addition to any
          team that is looking for lasting solutions wrapped in quality code.
        </p>
      </div>
    );
  }
}
export default AboutMe;
