import React, { Component } from 'react';
import { Segment, Grid, Header, Image } from 'semantic-ui-react';

class Cats extends Component {
	render () {
		return (
			<div className="cats">
			<Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Boris
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            A three year-old Scottish Straight ear, Boris is a man with
            deep and pressing concerns about things you might have in
            your hand. His shocked face begs the very real question 
            we all ponder every hour of every day, "Oh my god, what is 
            even happening?" Ham-bone, boney, Mr. Hamsandwich, fluff-butt, 
            the hammiest, has no answer for you, but he sure looks good while he's confused. 
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Katya aka "Cat yeah!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            A baby Scottish Fold, this traitor sleeps in the crook of James's
            arms at night and recognizes the sound of her name in the stream
            of water that comes from the kitchen sink. Having since outgrown
            sleeping in any of the plant containers, she'll settle for eating
            her feelings, whether they be palm leaves, the pizza slice in your hand, 
            or the leavings on used dinner plates. You can know Katya in the 
            smile of a good friend and the comfort of a soft blanket. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='medium' src='./imgs/AshleyFinal.jpg' circular />
          </Grid.Column >
          <Grid.Column 
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
			</div>
			)
	}
}


export default Cats;