import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = ({title,setCity,currentCity}) => {
  return (
    <div className='weather-button'>
        <Button variant="warning" 
        style={{backgroundColor: "#a6f7bb",borderColor: "#a6f7bb"}}
        onClick={()=>{
          currentCity? setCity(currentCity):setCity(title)
        }}
        >{title}</Button>
    </div>
  )
}

export default WeatherButton
