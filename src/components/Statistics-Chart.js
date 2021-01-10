import PropTypes from 'prop-types';

const Chart = ({ title, score, type }) => {
    return (
        <div className="mt-5 chart-border">
            <h6 className="text-white d-block">
                {title}
            </h6>
            <div>
                <span className="h1 text-white"><strong>{score}</strong></span>
                <span className="h6 text-secondary ml-2"><strong>{type}</strong></span>
            </div>
        </div>
    );
  }

  Chart.propTypes = {
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  };
  
  export default Chart;