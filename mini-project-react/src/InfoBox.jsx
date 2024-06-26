import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const INIT_URL="https://images.unsplash.com/photo-1496450681664-3df85efbd29f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80
                          ?RAIN_URL 
                          : info.temp >15 
                          ? HOT_URL
                          :COLD_URL} 
                        title="Weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}   {
                              info.humidity>80
                                ? <ThunderstormIcon/>
                                : info.temp >15 
                                ? <WbSunnyIcon/>
                                :<AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Max Temp: {info.tempMax}&deg;C</p>
                            <p>Min Temp: {info.tempMin}&deg;C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>The weather can be described as {info.weather}, feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
