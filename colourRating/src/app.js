import ColourList from "./colourList";
import {Component} from "react";
import { v4 } from "uuid";
import AddColourForm from "./addColourForms"

export class App extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            colours : props.colours
        };
        this.addColour = this.addColour.bind(this);
        this.rateColour = this.rateColour.bind(this);
        this.removeColour = this.removeColour.bind(this);
    }

    addColour(title, colour) {
        console.log(`adding colour ${title}`);
        const colours = 
            [...this.state.colours,
            {
                id: v4(),
                title,
                colour,
                rating: 0
            }
        ]
        this.setState({colours});
    }

    rateColour(id, rating) {
        console.log(`rating colour ${id}`);
        const colours = this.state.colours.map(colour => 
            (colour.id !== id) ?
            colour :
            {
                ...colour,
                rating
            })
            this.setState({colours});        
    }

    removeColour(id) {
        console.log("removing colour");
        const colours = this.state.colours.filter(colour =>
            colour.id !== id)
            debugger;
        this.setState({colours});    
    }

    render() {
        const {addColour, rateColour, removeColour} = this;
        const {colours} = this.state;
        return(
            <div className="app border">
                <AddColourForm onNewColour={addColour} />
                <ColourList colours={colours} onRate={rateColour} onRemove={removeColour} />
            </div>
        )
    }
}

export default App