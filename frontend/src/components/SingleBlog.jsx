import PropTypes from "prop-types";

function SingleBlog(props) {
  return (
    <div className="singleblog">
      <img className="singleblogimg" src={props.img} alt="" />

      <h2 className="singleblogheading">{props.heading}</h2>
      <div className="dateanduser">
        <p className="paragraph">{props.date}</p>
        <p className="paragraph">{props.user}</p>
      </div>
    </div>
  );
}

SingleBlog.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default SingleBlog;
