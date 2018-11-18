import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class Projects extends Component{



	render() {
		return(
			<div className="projects">
				<Card.Group>
				<Card className="card">
    			<Image src='./imgs/onitama.png' />
    				<Card.Content>
      			<Card.Header>Onitama</Card.Header>
     				<Card.Meta>
        			<span className='date'> September 2018</span>
			      </Card.Meta>
			      <Card.Description>Onitama is a chess-like game where pawn's movements are dictated by cards.</Card.Description>
			    	</Card.Content>
			   		<Card.Content extra>
      <a href="">
        Languages: Javascript, JQuery
      </a>
    </Card.Content>
  		</Card>
			<Card className="card">
    			<Image src='./imgs/brewr.png' />
    				<Card.Content>
      			<Card.Header>Brewr</Card.Header>
     				<Card.Meta>
        			<span className='date'>October 2018</span>
			      </Card.Meta>
			      <Card.Description>Brewr is a just like Untapped, without all the fussy social media.</Card.Description>
			    	</Card.Content>
			   		<Card.Content extra>
      <a href="">
        mongoDB, express
      </a>
    </Card.Content>
  		</Card>
  		<Card className="card">
    			<Image src='' />
    				<Card.Content>
      			<Card.Header>Scrum Poker</Card.Header>
     				<Card.Meta>
        			<span className='date'> November 2018</span>
			      </Card.Meta>
			      <Card.Description>Scrum Poker is an agile development tool for making decisions on how long features will take to develop.</Card.Description>
			    	</Card.Content>
			   		<Card.Content extra>
      <a href="">
        REACT, semantic-ui, mongoDB, express
      </a>
    </Card.Content>
  		</Card>
		</Card.Group>
			</div>
			)
	}

}

export default Projects;