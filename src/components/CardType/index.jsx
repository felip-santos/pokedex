import { Link } from "react-router-dom";

export const CardType = ({type}) => {
    return (
        <Link to={type.url}>
            <h3 style={{color: type.textColor}}>{type.title}</h3>
            <img src={type.img.src} alt={type.img.alt} />
        </Link>
    );
}