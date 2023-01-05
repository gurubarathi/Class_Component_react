import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function BasicExample({name,offer,price}) {
  return (
    
        <Col> 
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{offer}</Card.Text> 
            <Button variant="primary">Buy it</Button>
          </Card.Body>
          </Card>
        </Col>
    
   
  );
}

export default BasicExample;