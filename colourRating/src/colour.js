import StarRating from "./starRating.js";

const Colour = ({title, colour, rating=0}) => 
    <section className="colour">
        <h1>{title}</h1>
        <div className="colour"
             style={{ backgroundColor: colour}}>
        </div>
        <div className="starRatingContainer">
            <StarRating starsSelected={rating} />
        </div>
    </section>


export default Colour;