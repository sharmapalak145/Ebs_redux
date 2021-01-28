import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Adminicon from "../images/Admin-icon.png"
import Usericon from "../images/user-icon.png"
import './../mystyle/mystyle.css';

const GridExampleTextAlignmentCenter = () => (
<Card.Group className="display-flex padding-top">
<Card className="width-250">
  <Card.Content ><br/>
    <Image
      height="200px"
      width="250px"
      href="/register"
      src={Usericon}
    /><br/><br/>
    <Card.Header className="font-heading">Customer</Card.Header>
    <Card.Description className="font">
       View and Pay pending bills.
    </Card.Description>
  </Card.Content>
</Card>
<Card className="width-250">
  <Card.Content><br/><br/>
    <Image
      // floated='right'
      // size='mini'
      height="185px"
      width="210px"
      href="/adlogin"

      src={Adminicon}

    /><br/><br/>
    <Card.Header className="font-heading">Admin</Card.Header>
    <Card.Description className="font">
      Create and view Bills.
    </Card.Description>
  </Card.Content>
</Card>
</Card.Group>
)

export default GridExampleTextAlignmentCenter
