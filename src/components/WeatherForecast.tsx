import * as React from "react";
import axios from "axios";

import Cities from "./Cities";
import Date from "./Date";
import TableCurrent from "./TableCurrent";
import Table5Day from "./Table5Day";

import '../style/WeatherForecast.css'




function WeatherForecast() {
    const API_KEY = '2fdaf21a0d6434e142fafe9251f7a028'
    let [weather, setWeather] = React.useState([]);
    let [weather5Day, setWeather5Day] = React.useState([]);
    let [city, setCity] = React.useState('Moscow')

    type ResCurrent = {
        data: object
    }

    type Res5Day = {
        data: {
            list: Array<object>
        }
    }

    const findOption = () => {
        const option = (document.getElementById('cities') as HTMLInputElement).value
        setCity(option);
        city = option
    }

    const coord = () => {
        findOption();
        getWeather();
    }


    const getWeather = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then((res: ResCurrent) => {
                setWeather([res.data])
            })
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then((res: Res5Day) => {
                setWeather5Day(res.data.list)
                weather5Day = res.data.list
            })
    }

    React.useEffect(() => {
        getWeather()
    },[])

    return (
        <>
            <Cities city={city} coord={coord}/>
            <Date />
            <TableCurrent weather={weather} />
            <Table5Day weather5Day={weather5Day} weather={weather}/>
            <br/>
        </>

    )
}

export default WeatherForecast;