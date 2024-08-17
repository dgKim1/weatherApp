import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import LoadingSpinner from './components/LoadingSpinner';


function App() {
  const [weather,setWeather] = useState(null);
  const [currentWeather,setCurrentWeather] = useState(null);
  const [city,setCity] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  const cities = ['Busan','Tokyo','Stockholm'];
  const getLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon= position.coords.longitude;
      getWeatherByLocation(lat,lon);
    });
  }


  const getWeatherByLocation = async(lat,lon)=>{
    setIsLoading(true);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
    const data = await response.json();
    setWeather(data);
    setCurrentWeather(data);
    setIsLoading(false);
  }

  const getWeatherByCityName = async ()=>{
    setIsLoading(true);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
    const data = await response.json();
    setWeather(data);
    setIsLoading(false);
  }


  useEffect(()=>{
    if(city==="") getLocation()
    else getWeatherByCityName(city)

  },[city])

  useEffect(()=>{
    console.log(isLoading);
  },[isLoading])
  return (
      <div className='container'>
        {
          isLoading ? (<LoadingSpinner/>)
          :(<WeatherBox weather={weather} currentWeather={currentWeather} cities={cities} setCity={setCity}/>)
     }
    </div>
  );
}

export default App;
