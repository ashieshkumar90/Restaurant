import {
    Col,
    Card,
    Stack,
    Badge
} from "react-bootstrap";

import {IMAGEURL} from "./../utility/constant";

const RestaurantCard = ({data}) => {
        const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = data.info;
        return (
            <Card border="danger">
                <Card.Img variant="top" src={IMAGEURL+cloudinaryImageId} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {cuisines.join(', ')}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                    <Stack direction="horizontal" gap={5}>
                        <Badge bg="dark">
                            ☆ {avgRating}
                        </Badge>
                        <Badge bg="dark">
                            {sla?.slaString}
                        </Badge>
                        <Badge bg="dark">
                            {costForTwo}
                        </Badge>
                        
                    </Stack>
                    </small>
                </Card.Footer>
            </Card>
        );
}

export default RestaurantCard;