import { useState, useEffect } from "react";
import PropTypes from "prop-types";
function SingleReview(props) {
  const [stars, setStars] = useState("");

  useEffect(() => {
    // Calculate stars based on props.stars
    let calculatedStars = "";
    if (props.stars === 1) {
      calculatedStars = "⭐";
    } else if (props.stars === 2) {
      calculatedStars = "⭐⭐";
    } else if (props.stars === 3) {
      calculatedStars = "⭐⭐⭐";
    } else if (props.stars === 4) {
      calculatedStars = "⭐⭐⭐⭐";
    } else {
      calculatedStars = "⭐⭐⭐⭐⭐";
    }

    // Update the state with the calculated stars
    setStars(calculatedStars);
  }, [props.stars]); // Depend on props.stars to re-run the effect when it changes

  return (
    <div className="singlereview">
      <div className="singlereview__infosection">
        <div className="infosection__author">
          <img src={props.img} alt="" className="author__image" />
          <div className="reviewdate">
            <h2 className="heading__h3">{props.heading}</h2>
            <p className="review__stars">{stars}</p>
            <p className="paragraph">{props.date}</p>
          </div>
        </div>
      </div>
      <div className="singlereview__review">
        <p className="paragraph">{props.review}</p>
        <h4 className="paragraph">By: {props.author}</h4>
      </div>
    </div>
  );
}

SingleReview.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default SingleReview;
