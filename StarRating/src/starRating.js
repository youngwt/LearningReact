import Star from "./Star.js";

import createClass from "create-react-class"
import PropTypes from 'prop-types'


const StarRating = createClass({
    displayName: 'StarRating',
    propTypes: {
        totalStars: PropTypes.number 
    },
    getDefaultProps() {
        return {
            totalStars: 5
        };
    },
    getInitialState() {
        return {
            totalStars: 0
        };
    },
    change(starsSelected) {
        this.setState({starsSelected})
    },
    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;

        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) => 
                <Star key={i}
                      selected={i < starsSelected}
                      onClick={() => this.change(i+1)}
                      />
                )}
                <p> {starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
});

export default StarRating;