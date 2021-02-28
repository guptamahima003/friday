import React, { useState, useEffect, Suspense } from 'react';
import { getFetchCall } from '../api/fetchFunc';
import NoData from '../noData/Index';

const CarDescription = (props) => {
  const [modelName, setBrand] = useState([]);
  const [modelState, setProfileState] = useState(props);

  useEffect(() => {
    getFetchCall('https://fridayassignment.s3.amazonaws.com/vehicles.json').then(res => {
      setBrand(res)
    }, []);
    setProfileState(props);
  }, [props]);

  return (
    <React.Fragment>

      {modelName.some(el => el.model == modelState.models) == true ?
        <div className='cardWrap'>
          {modelName.map((modelName, index) => (
            ((modelState.models == modelName.model)) && <div
              key={index}
              className={'featureCard'}
            >
              <div><b>Brand: </b>{modelName.make}</div>
              <div><b>Model: </b> {modelName.model}</div>
              <div><b>Engine Power(ps): </b>{modelName.enginePowerPS}</div>
              <div><b>Engine Power(kw): </b>{modelName.enginePowerKW}</div>
              <div><b>Fuel Type: </b>{modelName.fuelType}</div>
              <div><b>Body Type: </b>{modelName.bodyType}</div>
              <div><b>Engine Capacity: </b>{modelName.engineCapacity}</div>
            </div>
          ))}
        </div> : modelName.length != 0 ? <NoData /> : <h3> Loading....</h3>}

    </React.Fragment>
  )
}

export default CarDescription;