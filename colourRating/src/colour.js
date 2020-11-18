import StarRating from "./starRating.js";

const Colour = ({title, colour, rating=0, onRemove=f=>f, onRate=f=>f}) => 
    <section className="colour card">
        <h1>{title}</h1>
        <button onClick={onRemove} >X</button>
        <div className="colour swatch"
             style={{ backgroundColor: colour}}>
        </div>
        <div className="starRatingContainer">
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </section>


export default Colour;