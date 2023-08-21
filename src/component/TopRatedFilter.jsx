import {
    Col,
    Form
} from "react-bootstrap";

export default TopRatedFilter = ({topRatedFitlerProp}) => {
    return (
        <Col>
            <Form>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Top Rated Restaurant"
                    onChange={topRatedFitlerProp}
                />
            </Form>
        </Col>
    );
}
