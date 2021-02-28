import React, { useState, useEffect, Suspense } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { getFetchCall } from '../api/fetchFunc';
import NoData from '../noData/Index';
import CarDescription from './carDesc';

const SelectModel = (props) => {
  let history = useHistory();
  const [modelName, setBrand] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0)
  const handleChange = (e) => {
    setSelectedValue(e.target.value)
    history.push("/model/:desc");
  }
  useEffect(() => {
    getFetchCall('https://fridayassignment.s3.amazonaws.com/models.json').then(res => {
      setBrand(res)
    }, []);
  }, []);

  return (
    <React.Fragment>
      <div className='brandName'>
        <span>{props.brand}</span>
        <span>{props.brand}</span>
      </div>

      {modelName.some(el => el.make == props.brand) == true ?
        <React.Fragment>
          <div className='title'>Select Listed Model</div>
          <div className="alertBanner">
            &#x26A0; Please select 3er for BMW and Fiesta, C-Max for Ford</div>
          <div className='selectWrap'>
            <select onChange={handleChange} value={selectedValue}>
              <option value={'Select Brand'}>Select Model</option>
              {modelName.map((modelName, index) => (
                (props.brand == modelName.make) && <option
                  key={index}
                  value={modelName.model}
                >
                  {modelName.model}
                </option>
              ))}
            </select>
          </div>
        </React.Fragment> :
        modelName.length != 0 ? <NoData /> : <h3> Loading....</h3>
      }

      <div>
        <Route path={`/model/:desc`} render={(props) => <CarDescription models={selectedValue} />} />
      </div>
    </React.Fragment>
  )
}

export default SelectModel;