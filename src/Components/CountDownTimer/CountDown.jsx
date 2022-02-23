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
        <div className="border border-dark border-3 rounded bg-white text-center w-50 p-4">
            <h2>{remainingTime.days} dage {remainingTime.hours} Timer {remainingTime.minutes} Minutter {remainingTime.seconds} Sekunder </h2>
        </div >
    )
})

export default CountDown