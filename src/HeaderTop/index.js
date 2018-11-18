import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';


class HeaderTop extends Component {
  render() {
  return(
  <div className="header">
  
    <video
    className="test"
    autoPlay="true"
    >
      <source 
      type="video/mp4" 
      source="./imgs/Behind-the-screen.mp4" />
    </video>
    <Header
      as='h1'
      content='Ashley Fueger'
      inverted
      style={{
        fontWeight: 'normal',
        marginBottom: 0,  
      }}
    />
    <Header
      as='h2'
      content='Full-stack Developer'
      inverted
      style={{
        fontWeight: 'normal'
      }}
    />

  </div>
    )
  }
}

export default HeaderTop;