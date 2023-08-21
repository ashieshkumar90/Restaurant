import {
    Container,
    Row,
} from "react-bootstrap";

import {
    useState
} from "react";

import RestaurantCard from "./RestaurantCard";
import FilterRestaurant from "./FilterRestaurant";
import TopRatedFilter from "./TopRatedFilter";
import SearchFilter from "./SearchFilter";

import useFetchRestaurant from "../utility/useFetchRestaurant";

export default RestaurantListing = () => {
    const [filter, setFilter] = useState({
        topRatedFiterValue: false,
        searchFilterValue: ''
    });

    const restaurantData = useFetchRestaurant(filter);

    const handleTopRated = (e) => {
        setFilter((prv) => {
            return ({
                ...prv,
                topRatedFiterValue: e.target.checked
            });
        })
    }

    const handleSearchFilter = (e) => {
        setFilter((prv) => {
            return ({
                ...prv,
                searchFilterValue: e.target.value
            });
        })
    }

    return (
        <>
            <Container >
                <Row className="mt-3 mb-3">
                    <TopRatedFilter topRatedFitlerProp={handleTopRated} />
                    <SearchFilter searchFilterProp={handleSearchFilter}/>
                </Row>

                <Row xs={1} sm={2} md={3} lg={3} className="g-5">

                    { restaurantData.map((value, id) => {
                        return (
                            <RestaurantCard 
                                data={value}
                                key={id}
                            />
                        );
                    })}             
                </Row>
            </Container>
        </>
    );
}
