import * as React from "react";

import '../style/Weather.css'


function Weather5Day(props) {

    const [time, setTime] = React.useState('')
    const month = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'Mar',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    }

    const getTime = () => {
        let t : string | number = Number(props.time.slice(11, 13)) + (props.tz / 3600);
        let m = month[props.time.slice(5,7)];
        let d = Number(props.time.slice(8,10));
        if (t > 24) {
            t = t - 24;
            d++;
        } if (t === 24) {
            t = 0;
            d++;
        } if (t < 0) {
            t = 24 + t;
            d--;
        }

        if (t < 10) {
            t = '0' + String(t);
        }
        t = String(t) + ':00';

        setTime(`${m} ${d} ${t}`);
    }

    React.useEffect(() => {
        if (props.time) getTime()
    })


    return (
        <tr>
            <td>{ time }</td>
            <td>{props.temp} °C</td>
            <td>{props.weather}</td>
            <td>{props.prec}</td>
            <td>{props.wind} m/s</td>
        </tr>
    )
}

Weather5Day.defaultProps = {
    prec: '-'
};

export default Weather5Day;