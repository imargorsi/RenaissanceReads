import PropTypes from "prop-types";

function SingleBook(props) {
  return (
    <div className="popularbooks__single">
      <img src={props.img} alt="" className="singlebookcover" />

      <div className="singlebookdetails">
        <h2 className="singlebook__heading">{props.title}</h2>
        <p className="singlebook__author">{props.author}</p>

        <span className="fa fa-star stars checked"></span>
        <span className="fa fa-star stars checked"></span>
        <span className="fa fa-star stars checked"></span>
        <span className="fa fa-star stars checked"></span>
        <span className="fa fa-star stars"></span>

        <p className="singlebook__user">{props.by}</p>
        <button className="btn book__btn">Read More</button>
      </div>
    </div>
  );
}

SingleBook.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
};

export default SingleBook;
