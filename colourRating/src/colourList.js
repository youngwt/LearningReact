import Colour from "./colour";

const ColourList = ({ colours }) => (
    <div className="colour-list">
        {
            //console.log("colourlist.js " + colours)
            (colours.length === 0) ?
            <p>No colours listed. Add a colour</p> :
            colours.map(colour => 
                <Colour key={colour.id} {...colour} />
            ) 
        }
    </div>
)

export default ColourList;