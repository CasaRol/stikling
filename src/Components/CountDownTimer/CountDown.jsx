import { useState, useEffect } from 'react'
import './CountDownStyling.css'
import { getRemainingTime } from '../../scripts'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountDown = (({ timestampMs }) => {

    const formattedDate = new Date(timestampMs).toLocaleString('da-DK', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false  // Use 24-hour format, or remove this for 12-hour format
    });

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(timestampMs);
        }, 1000)
        return () => clearInterval(intervalId);
    }, [timestampMs])

    function updateRemainingTime(countDown) {
        setRemainingTime(getRemainingTime(countDown))
    }

    return (
        <div className="border border-dark border-3 rounded text-center w-50 p-4 bg-black bg-opacity-25">
            <h2>{remainingTime.days} dage {remainingTime.hours} Timer {remainingTime.minutes} Minutter {remainingTime.seconds} Sekunder </h2>
            <p><strong>{formattedDate}</strong></p>
        </div >
    )
})

export default CountDown