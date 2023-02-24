import { useState } from "react";
import axios from "axios"
import * as C from "./styles";


export default function Location() {

    const [locationName, setLocationName] = useState();
    const [locationRegion, setLocationRegion] = useState();
    const [locationTemperature, setLocationTemperature] = useState();
    const [locationIcon, setLocationIcon] = useState();
    const [locationText, setLocationText] = useState();
    const [showElement, setshowElement] = useState(true);

    const getWeather = () => {
        try {
            navigator.geolocation.getCurrentPosition(location => {
                console.log(location)
                const getLocation = `http://api.weatherapi.com/v1/current.json?key=58c8cef7b0a14ea69b5230904230402&q=${location.coords.latitude}, ${location.coords.longitude}&lang=pt`

                axios.get(getLocation).then(response => {
                    setLocationName(response.data.location.name);
                    setLocationRegion(response.data.location.region);
                    setLocationTemperature(response.data.current.temp_c);
                    setLocationIcon(response.data.current.condition.icon);
                    setLocationText(response.data.current.condition.text);
                });
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <C.Button onClick={getWeather}>
                Localização aproximada
            </C.Button >

            {showElement ?
                <C.Box_Location>
                    <C.Title>{locationName}</C.Title>
                    <C.Title>{locationRegion}</C.Title>
                    <C.Subtitle>{locationTemperature}</C.Subtitle>
                    <C.Image src={locationIcon} />
                    <C.Text>{locationText}</C.Text>
                </C.Box_Location>
                : null}

            {locationName ?
                <C.Button color={'blue'} onClick={() => setshowElement(!showElement)}>{showElement ? "Esconder" : "Mostrar"}</C.Button>

                : null
            }
        </>

    )
}


