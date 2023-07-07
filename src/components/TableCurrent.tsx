import * as React from "react";
import Table from "react-bootstrap/Table";

import WeatherCurrent from "./WeatherCurrent";

import '../style/Table.css'

function TableCurrent(props) {

    type WeatherType = {
        main: string
    };

    type WeatherCurrentType = {
        id: number,
        main: {
            temp: string,
            feels_like: string,
        },
        weather: Array<WeatherType>,
        wind: {
            speed: string
        }
    };

    return (
        <Table className={'weather visible'} striped bordered hover>
            <thead>
            <tr>
                <th>Current temp</th>
                <th>Feels like</th>
                <th>Weather</th>
                <th>Wind</th>
            </tr>
            </thead>
            <tbody>
            { props.weather.map((el: WeatherCurrentType) =>
                <WeatherCurrent
                    key={el.id} temp={el.main.temp} feelsLike={el.main.feels_like}
                    weather={el.weather[0].main} wind={el.wind.speed}
                />
            )}
            </tbody>
        </Table>
    )
}

export default TableCurrent;