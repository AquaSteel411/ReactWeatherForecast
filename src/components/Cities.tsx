import * as React from "react";


function Cities(props) {
    const cities: Array<string> = ['Anchorage', 'Washington', 'Novokuznetsk', 'Moscow', 'Paris', 'London', 'Berlin', 'Amsterdam', 'Rome', 'Madrid', 'Oslo']

    return (
        <>
            <select id={'cities'} className={'cities'} multiple>
                {
                    cities.map(city => <option value={city}>{city}</option> )
                }
            </select>
            <p><button className={'select-city'} onClick={props.coord}>Select</button></p>
            <p className={'city'}>{ props.city }</p>
            <p className={'time'}>Local time</p>
        </>
    )
}

export default Cities;