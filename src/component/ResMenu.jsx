import {useParams} from "react-router-dom";
const ResMenu = () => {
    const {resId} = useParams();
    return (
        <h2>Menu Id = {resId}</h2>
    );
}

export default ResMenu;