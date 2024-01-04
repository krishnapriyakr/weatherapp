import React from 'react'
import './Home.css'
import { MDBIcon } from 'mdb-react-ui-kit';


function Home() {
  let api_key = 'dd94f859a0e52d6e4767fddf735f04a7'
  
  const search=async()=> {
    const element = document.getElementsByClassName("city")
    if (element[0].value == "")
  {
    return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`

    let response = await fetch(url);
    let data = await response.json();
    const humidity=document.getElementsByClassName("humidity-percent")
    const wind=document.getElementsByClassName("wind-rate")
    const temprature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")
    
    humidity[0].innerHTML = data.main.humidity+"%";
    wind[0].innerHTML =Math.floor(data.wind.speed)+"km/h";
    temprature[0].innerHTML =Math.round(data.main.temp)+"°C";
    location[0].innerHTML = data.name;

  }
  return (
      <div className='weather'> 
          <div className='search' style={{paddingLeft:'15px',paddingTop:'30%'}}>
              <input type="text"  className="city" placeholder='Search'   style={{ borderRadius: '40px', width: '250px',height:'40px',border:'none',outline:'none',paddingLeft:'7px' }} />
              <div className="searchicon" onClick={()=>{search()}}>
           <button style={{ border:'none',backgroundColor:'white'}}>   <MDBIcon fas icon="search"/> </button>
              </div> 
          </div>
          <div className="weather-img">  <br />
            <img src="https://cdn-icons-png.flaticon.com/512/8047/8047214.png" className='img' alt="" />
      </div>
      
      <div className="weather-temp">0°C</div>
      <div className="weather-location">   <MDBIcon fas icon="map-marker-alt" size='sm' style={{ paddingTop: "30px" }} /><p> &nbsp; </p>
        Location</div>
      <div className="data-container">

         <MDBIcon fas icon="tint" size='2x' className='icon' /> &nbsp;&nbsp;
        <div className="element">
          
          <div className="data">
            <div className="humidity-percent">0 %</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <MDBIcon fas icon="wind" size='2x' className='icon' />
        <div className="element">
        <img src="" alt="" />
        
          <div className="data">
            <div className="wind-rate">0 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home