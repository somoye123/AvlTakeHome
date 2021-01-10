import Stat from '../components/Stat';
import Chart from '../components/Statistics-Chart';

const Statistics = () => {
  return (
    <div>
      <div className="d-flex flex-md-column stats-container align-items-md-center justify-content-md-start">
        <div className="mr-3">
          <Chart title="ACCURACY" score={75} type="%" />
        </div>
        <div className="">
          <Stat title="COMPLETED" score={100} type="PROBLEMS" />
          <Stat title="CORRECT" score={68} type="PROBLEMS" />
        </div>
      </div>
      <div className="d-none d-md-block mx-5 w-100 pb-3">
        <small className="text-secondary font-weight-bold">
          PAST 24 HOURS, 2020 2/20
        </small>
      </div>
    </div>
  );
};

export default Statistics;
