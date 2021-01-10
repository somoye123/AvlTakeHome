import PropTypes from 'prop-types';

const Stat = ({ title, score, type }) => {
    return (
        <div className="mt-5">
            <h6 className="text-white align-self-start">
                {title}
            </h6>
            <>
                <span className="h1 text-white"><strong>{score}</strong></span>
                <span className="h6 text-secondary ml-2"><strong>{type}</strong></span>
            </>
        </div>
    );
  }

  Stat.propTypes = {
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  };
  
  export default Stat;