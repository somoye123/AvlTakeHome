import Stat from '../components/Stat';
import Chart from '../components/Statistics-Chart';

const Statistics = () => {
    return (
      <div className='row custom-dark min-vh-100'>
        <div className='col-md-6 col-sm-12 mx-5'>
          <Chart title='ACCURACY' score={75} type='%' />
        </div>
        <div className='col-md-6 col-sm-12 mx-5'>
          <Stat title='COMPLETED' score={100} type='PROBLEMS' />
          <Stat title='CORRECT' score={68} type='PROBLEMS' />
        </div>
        <div className='mt-auto d-none d-md-block d-md-flex mx-5 w-100 py-3'>
          <small className='text-secondary font-weight-bold'>
            PAST 24 HOURS, 2020 2/20
          </small>
        </div>
      </div>
    )
  }
  
  export default Statistics;