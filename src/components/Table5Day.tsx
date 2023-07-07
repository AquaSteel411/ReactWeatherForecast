import * as React from "react";
import Table from "react-bootstrap/Table";

import Weather5Day from "./Weather5Day";

import '../style/Table.css'


function Table5Day(props) {

    type WeatherType = {
        main: string
    };
    type Weather5DayType = {
        dt: string,
        dt_txt: string,
        main: {
            temp: string
        },
        weather: Array<WeatherType>,
        wind: {
            speed: string
        },
        rain: {
            '3h': string
        },
    };

    return (
        <Table striped bordered hover className={'weather hidden'}>
            <thead>
            <tr>
                <th>Time</th>
                <th>Temp</th>
                <th>Weather</th>
                <th>Rainfall</th>
                <th>Wind</th>
            </tr>
            </thead>
            <tbody>
            { props.weather5Day.map((el: Weather5DayType) =>  el.hasOwnProperty('rain') ?
                <Weather5Day
                    key={el.dt} time={el.dt_txt} temp={el.main.temp}
                    weather={el.weather[0].main} wind={el.wind.speed}
                    prec={`${el.rain['3h']} mm`} tz={props.weather[0].timezone}
                /> :
                <Weather5Day
                    key={el.dt} time={el.dt_txt} temp={el.main.temp}
                    weather={el.weather[0].main} wind={el.wind.speed}
                    tz={props.weather[0].timezone}
                />
            )}
            </tbody>
        </Table>
    )
}

export default Table5Day;