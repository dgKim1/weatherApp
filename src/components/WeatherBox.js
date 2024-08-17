import React from 'react'
import WeatherButton from './WeatherButton'

const WeatherBox = ({weather,currentWeather,cities,setCity}) => {
  console.log(weather);
  return (
    <div className='weather-box'>
      <h1 className='text-center'>오늘의 날씨</h1>
      <h3 className='text-2xl font-bold'>{weather?.name}</h3>
      <label>현재 기온 <span><p>{Math.floor(weather?.main.temp)}°C</p></span></label>
      <p>체감 온도: {Math.floor(weather?.main.feels_like)}°C</p>
      <div className='button-container'>
      <WeatherButton title={'current region'} currentCity={currentWeather?.name} setCity={setCity}/>
      <WeatherButton title={cities[0]} setCity={setCity}/>
      <WeatherButton title={cities[1]} setCity={setCity}/>
      <WeatherButton title={cities[2]} setCity={setCity}/>
      </div>
    </div>
  )
}

export default WeatherBox
