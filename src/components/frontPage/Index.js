import React, { useState, useEffect } from 'react';
import { Router, Route, Link, useLocation, useHistory } from 'react-router-dom';
import Header from '../header/Index';
import SelectModel from './selectModel';
import './style.css'

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

    fetch(
      `http://uimocks.infoedge.com/makes.json`,
      {
        method: "GET",
      },
    )
      .then(res => res.json())
      .then(response => {
        setBrand(response);
      })
      .catch(error => console.log(error));
  }, []);

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