import React, { Component } from 'react';
import { Header, Divider } from 'semantic-ui-react';


const HeaderTop = ({ mobile }) => {
  return(
  <div className="header">
  
    <video
    className="test"
    autoPlay="true"
    >
      <source 
      type="video/mp4" 
      src="./imgs/Behind-the-screen.mp4" 
      />
    </video>
    <Header
      as='h1'
      content='Ashley Fueger'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0, 
        marginTop: mobile ? '1.5em' : '3em', 
      }}
    />
    <Header
      as='h2'
      content='Full-stack, full-time'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  <div className="header-text">
  </div>
  </div>
  )
}

export default HeaderTop;