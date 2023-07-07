import * as React from "react";
import Button from "react-bootstrap/Button";

import '../style/Date.css'

function Date() {

    const changeDate = () => {
        const notActive = document.getElementsByClassName('btn-primary')[0];
        const active = document.getElementsByClassName('btn-outline-primary')[0];
        const hidden = document.getElementsByClassName('weather hidden')[0];
        const visible = document.getElementsByClassName('weather visible')[0];
        visible.className = 'weather hidden table table-striped table-bordered table-hover';
        hidden.className = 'weather visible table table-striped table-bordered table-hover';
        active.className = 'date-option btn btn-primary';
        notActive.className = 'date-option btn btn-outline-primary';
    }

    return (
        <>
            <div className={'date'}>
                <Button className={'date-option'} onClick={changeDate} variant="primary">Current</Button>
                <Button className={'date-option'} onClick={changeDate} variant="outline-primary">5 day</Button>
            </div>
        </>
    )
}

export default Date;