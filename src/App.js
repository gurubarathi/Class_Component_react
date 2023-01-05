import Container from "react-bootstrap/esm/Container";
import BasicExample from "./Carding";
import Row from 'react-bootstrap/Row';
import State from "./State";
import Array from "./Array";

function App() {

  return (
    <>
    <Container className="m-4">
      <Row>
     <BasicExample  name="flower pot" offer="20%"price='300' />
     <BasicExample name="silver pot" offer="10%"price='1000'/>
     <BasicExample name="clay pot" offer="7%"price='600'/>
     </Row>
     <State/>
     <Array/>
     </Container>
    </>
  );
  }

export default App;
