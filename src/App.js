import Stats from './containers/Statistics'
import Details from './containers/Details'

const App = () => {
  return (
    <div className='container-fluid bg-dark'>
      <div className='row min-vh-100'>
        <div className='col-sm-12 col-lg-2'>
          <Stats />
        </div>
        <div className='col-sm-12 col-lg-10'>
          <Details />
        </div>
      </div>
    </div>
  )
}

export default App
