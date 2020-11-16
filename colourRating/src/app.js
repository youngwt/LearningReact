import ColourList from "./colourList";
import Component from "react";
import { v4 } from "uuid";
import AddColourForm from "./addColourForms"

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colours : []
        };
        this.addColour = this.addColour.bind(this);
    }

    addColour(title, colour) {
        const colours = 
            [...this.state.colours,
            {
                id: v4(),
                title,
                colour,
                rating: 0
            }
        ]
        this.setState(colours);
    }

    render() {
        const {addColour} = this;
        const {colours} = this.state;
        return(
            <div className="app">
                <AddColourForm onNewColour="{addColour}" />
                <ColourList colours={colours} />
            </div>
        )
    }
}