import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Projects from '../Projects';
import HeaderTop from '../HeaderTop';


class MainContainer extends Component { 
  render () { 
    return (
    <div>
    <HeaderTop />
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            About Me
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            With a background in operations and project management, my move into
            software engineering gives me both a granular and big picture
            perspective of product. Being a careful observer who cares deeply
            about the architecture of decision-making, I’m a great addition to any
            team that is looking for lasting solutions wrapped in quality code.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
            My Experience
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              I'm a graduate of General Assembly's Full-stack coding bootcamp, a three month intensive course that included javascript, mongoDB with Node.js and express, REACT, PostgreSQL, and Python with Django. In the past I've worked at a software start-up in operations primarily responsible for Fraud Analysis and protection. Having gone from low double digit employees to over a thousand in the same company, I've had a wide array of responsibilities that give me relevant experience to know what problems need solving. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='medium' src='./imgs/AshleyFinal.jpg' circular />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Divider />
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Projects
        </Header>
        <Projects /> 
        <Button as='a' size='large' >
        An In Depth Look
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Me</List.Item>
                <List.Item as='a'>Pictures of my cats</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
    )
  }
}
export default MainContainer;




