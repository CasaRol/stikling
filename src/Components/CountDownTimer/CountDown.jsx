import { useState, useEffect } from 'react'
import './CountDownStyling.css'
import { getPassedTime } from '../../scripts'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
    months: '00',
    years: '00'
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
        setRemainingTime(getPassedTime(countDown))
    }

    return (
        <div className="border border-dark border-3 rounded text-center w-50 p-4 bg-white">
            <h2>{remainingTime.years} år {remainingTime.months} måneder {remainingTime.days} dage {remainingTime.hours} Timer {remainingTime.minutes} Minutter {remainingTime.seconds} Sekunder </h2>
        </div >
    )
})

export default CountDown