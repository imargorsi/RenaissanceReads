import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SingleBook(props) {
  return (
    <div className="popularbooks__single" id={props.genre}>
      <img src={props.img} alt="" className="singlebookcover" />

      <div className="singlebookdetails">
        <h2 className="singlebook__heading">{props.title}</h2>
        <p className="singlebook__author">Author: {props.author}</p>
        {props.userName && <p className="singlebook__user"> by: {props.by}</p>}

        {props.showButton && (
          <Link key={props.bookId} to={`/singlebook/${props.bookId}`}>
            <button className="btn book__btn">Read More</button>
          </Link>
        )}
      </div>
    </div>
  );
}

SingleBook.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  by: PropTypes.string,
  genre: PropTypes.string,
  bookId: PropTypes.string,
  showButton: PropTypes.bool,
  userName: PropTypes.bool,
};

SingleBook.defaultProps = {
  showButton: true,
  userName: true,
};

export default SingleBook;
