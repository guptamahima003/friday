import React, { useState, useEffect } from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';
import { getFetchCall } from '../api/fetchFunc';
import Header from '../header/Index';
import SelectModel from './selectModel';

const SelectCar = (props) => {
  let history = useHistory();
  const location = useLocation();
  const [brand, setBrand] = useState([]);
  const [selectedValue, setSelectedValue] = useState()

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
    history.push("/model");

  }
  useEffect(() => {
        getFetchCall('https://fridayassignment.s3.amazonaws.com/makes.json').then(res => {       
        setBrand(res) 
      },[]);
  }, [])
  return (
    <React.Fragment>

      <Header />
      <div className='selectPage'>
        {(!selectedValue || (location.pathname == '/')) ? <React.Fragment>
          <div className='title'>Select your car brand from the list</div>

          <div className="alertBanner">
            &#x26A0; Please select BMW or Ford to select model (limited data present)</div>
          <div className='selectWrap'>
            <select onChange={handleChange} value={location.pathname == '/' ? 'Select Brand' : selectedValue}>
              <option value={'Select Brand'}>Select Brand</option>
              {brand.map((brand, index) => (
                <option
                  key={index}
                  value={brand}
                >
                  {brand}

                </option>

              ))}
            </select>
          </div>
        </React.Fragment>
          : <div>
            <Route path="/model" render={(props) => <SelectModel brand={selectedValue} />} />
          </div>
        }


      </div>


    </React.Fragment>
  )
}

export default SelectCar;