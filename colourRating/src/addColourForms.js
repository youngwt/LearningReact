import { Component} from "react";

class AddColourForms extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        const {_title, _colour} = this.refs;
        e.preventDefault();
        this.props.onNewColour(_title.value, _colour.value)
        _title.value = "";
        _colour.value - "#000000";
        _title.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="colour title..."  required/>
                <input ref="_colour" type="color" required />
                <button>Add</button>
            </form>
        );
    }
}

export default AddColourForms;
