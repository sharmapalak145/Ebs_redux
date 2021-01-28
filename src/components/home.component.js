import React from 'react';
import {Grid, Button, Card, Image} from 'semantic-ui-react'
import homelogo from "../images/homelogo.png";
import './../mystyle/homestyle.css';

const HeadSection = () => (
    
<Card.Group >
<Card className="width-250s">
<Grid columns={2} padded='vertically' className="display-flexs" >
      <Grid.Column>
        <Image src= {homelogo}
        width="490px"
        height="550px" />
      </Grid.Column>
      <Grid.Column className="bg-color-grey"><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Card.Header className="font-heading fonts">Welcome!!</Card.Header><br/>
      <Card.Description className="font">
      This website have two Roles, Here the Admin can generate electricity bills & Customer can view and pay their electricity bills
    </Card.Description><br/><br/>
    <div className="text-align-center">
    <Button className="homebutton" 
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://localhost:3000/dashboard';
    }}>
        Getting Started
        </Button>
        </div>
      </Grid.Column>
    </Grid>
</Card>
</Card.Group>
)


export default HeadSection
