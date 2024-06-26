import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";



export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"surat",
        feelsLike:40.27,
        humidity:49,
        temp:34.99,
        tempMax:34.99,
        tempMin:34.99,
        weather:"few clouds",
    });


    let updateInfo=(result)=>{
        setWeatherInfo(result);

    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By @Dhruva</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}