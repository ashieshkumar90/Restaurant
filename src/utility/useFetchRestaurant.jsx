import {useState, useEffect} from "react";
import {RESTAURANTLISTINGURL} from "./constant";

const useFetchRestaurant = (filter) => {
    const [resData, setResData] = useState([]);
    const [originalResData, setOriginalResData] = useState([]);
    
    let filteredData = originalResData;
    if ( (originalResData.length > 0) && (filter.topRatedFiterValue === true) ) {
        filteredData = filteredData.filter( (value) => {
            return value.info.avgRating > 4
        });
        setOriginalResData(filteredData);
        // console.log(filter);
        // console.log(filteredData);
    }
    

    useEffect(() => {
        fetchRestaurant(filter);
    }, []);
    
    const fetchRestaurant = async (filter) => {

        const restaurantData = await fetch(RESTAURANTLISTINGURL);
        const restaurantJsonData = await restaurantData.json(); 
        const data = restaurantJsonData?.data?.cards;

        // restaurant_grid_listing ordering is getting changed from swiggy, so filtering it from array
        let filteredData = data.filter( (value) => {
            return (
                value.card.card.id === "restaurant_grid_listing"
            )
        });
        
        filteredData = filteredData?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // if (filter.topRatedFiterValue === true) {
        //     filteredData = filteredData.filter( (value) => {
        //         return value.info.avgRating > 4
        //     });
        // }

        // if (filter.searchFilterValue !== '') {
        //     filteredData = filteredData.filter( (value) => {
        //         return value.info.name.toLowerCase().includes(filter.searchFilterValue.toLowerCase());
        //     } );
        // }
        setResData(filteredData);
        setOriginalResData(filteredData);
    }

    return resData;
}

export default useFetchRestaurant;