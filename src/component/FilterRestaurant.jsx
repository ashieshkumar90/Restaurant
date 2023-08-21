import { 
    Container,
    Row,
    Col,
    Form,
    InputGroup 
} from "react-bootstrap";

export default FilterRestaurant = () => {
    return (
        <>
            <Container >
                <Row className="mt-3 mb-3">
                    <Col>
                        <Form>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Top Rated Restaurant"
                            />
                        </Form>
                    </Col>

                    <Col>
                        <InputGroup >
                            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                            <Form.Control
                                placeholder="By Restaurant Name"
                                aria-label="By Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container >
        </>
    );
}