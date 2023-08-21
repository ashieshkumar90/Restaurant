import {
    Col,
    InputGroup,
    Form
} from "react-bootstrap";

export default SearchFilter = ( {searchFilterProp} ) => {
    return (
        <Col>
            <InputGroup >
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                <Form.Control
                    placeholder="By Restaurant Name"
                    aria-label="By Name"
                    aria-describedby="basic-addon1"
                    onChange={searchFilterProp}
                />
            </InputGroup>
        </Col>
    );
}