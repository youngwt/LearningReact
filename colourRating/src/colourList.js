import Colour from "./colour";

const ColourList = ({ colours, onRemove=f=>f, onRate=f=>f }) => (
    <div className="colour-list">
        {
            (colours.length === 0) ?
            <p>No colours listed. Add a colour</p> :
            colours.map(colour => 
                <Colour key={colour.id} {...colour} 
                onRemove={() => onRemove(colour.id)}
                onRate={(rating) => {onRate(colour.id, rating)}}/>
            ) 
        }
    </div>
)

export default ColourList;