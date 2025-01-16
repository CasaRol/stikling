import { useState, useEffect } from 'react'
import './CountDownStyling.css'
import { getRemainingTime, getPassedTime } from '../../scripts'

const defaultTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
    months: '00',
    years: '00',
    weeks: '00'
}

const CountDown = ((props) => {
    var formattedDate;

    if (!props.born) {
        formattedDate = new Date(props.timestampMs).toLocaleString('da-DK', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: false  // Use 24-hour format, or remove this for 12-hour format
        });
    } else {
        formattedDate = new Date(props.timestampMs).toLocaleString('da-DK', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false  // Use 24-hour format, or remove this for 12-hour format
        });
    }

    const [timeCount, setTimeCount] = useState(defaultTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (props.born) {
                updatePassedTime(props.timestampMs)
            } else {
                updateRemainingTime(props.timestampMs);
            }
        }, 1000)
        return () => clearInterval(intervalId);
    }, [props.timestampMs])

    function updateRemainingTime(startingDateTime) {
        setTimeCount(getRemainingTime(startingDateTime))
    }

    function updatePassedTime(startingDateTime) {
        setTimeCount(getPassedTime(startingDateTime))
    }

    return (
        <div className="border border-dark border-3 rounded text-center w-50 p-4 bg-black bg-opacity-25">
            {props.born ?
                (<h2>
                    {timeCount.years} {"år "}
                    {timeCount.months} {timeCount.months > 1 ? "måneder " : "måned "}
                    {timeCount.days} {timeCount.days > 1 ? "dage " : "dag "}
                    {timeCount.hours} {timeCount.hours > 1 ? "timer " : "time "}
                    {timeCount.minutes} {timeCount.minutes > 1 ? "minutter " : "minut "}
                    {timeCount.seconds} {timeCount.seconds > 1 ? "sekunder " : "sekundt "}
                </h2>) :
                (<h2>
                    {timeCount.days} {timeCount.days > 1 ? "dage " : "dag "}
                    {timeCount.hours} {timeCount.hours > 1 ? "timer " : "time "}
                    {timeCount.minutes} {timeCount.minutes > 1 ? "minutter " : "minut "}
                    {timeCount.seconds} {timeCount.seconds > 1 ? "sekunder " : "sekundt "}
                </h2>)
            }
            {!props.born ? <h3>({timeCount.weeks} {timeCount.weeks > 1 ? " uger " : " uge "} tilbage)</h3> : ("")}
            <p>
                {props.born ? "Født: " : "Anslået dato: "}
                <strong>{formattedDate}</strong>
            </p>
        </div >
    )
})

export default CountDown