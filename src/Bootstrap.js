import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Bootstrap(){
    return (
        <Container>
            <Row>
                <Col>
                    <div>Col 1</div>
                    <Button as="a" variant="primary">
                        Button as link
                    </Button>
                </Col>
                <Col>
                    <div>Col 2</div>
                    <Button as="a" variant="warning">
                        Button as link
                    </Button>
                </Col>
            </Row>
        </Container>
    )

}

export default Bootstrap;