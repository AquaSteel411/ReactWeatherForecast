import * as React from "react";

import '../style/Weather.css'

function WeatherCurrent(props) {


    return (
        <tr>
            <td>{props.temp} °C</td>
            <td>{props.feelsLike} °C</td>
            <td>{props.weather}</td>
            <td>{props.wind} m/s</td>
        </tr>
    )
}

export default WeatherCurrent;