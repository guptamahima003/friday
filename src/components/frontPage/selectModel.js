import React, { useState, useEffect } from 'react';
import { Router, Route, Link, useRouteMatch, BrowserRouter, useHistory } from 'react-router-dom';
import NoData from '../noData/Index';
import CarDescription from './carDesc';
import './style.css'

const SelectModel = (props) => {
  let history = useHistory();
  const [modelName, setBrand] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0)
  let { path, url } = useRouteMatch();
  const handleChange = (e) => {
    setSelectedValue(e.target.value)
    history.push("/model/:desc");
  }
  useEffect(() => {
    const ac = new AbortController();

    fetch(
      `http://uimocks.infoedge.com/models.json`,
      {
        method: "GET",
      },
    )
      .then(res => res.json())
      .then(response => {
        // console.log(response)
       
        setBrand(response);
      })
      .catch(ex => console.error(ex));
    return () => ac.abort();

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
      <NoData />
    }
      <div>
        <Route path={`/model/:desc`} render={(props) => <CarDescription models={selectedValue} />} />
      </div>

    </React.Fragment>
  )
}

export default SelectModel;