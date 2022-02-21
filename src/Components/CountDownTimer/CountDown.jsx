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
        <div className="countDownTimer backgroundColor">
            <span>{remainingTime.days}</span>
            <span>Dage</span>
            <span>{remainingTime.hours}</span>
            <span>Timer</span>
            <span>{remainingTime.minutes}</span>
            <span>Minutter</span>
            <span>{remainingTime.seconds}</span>
            <span>Sekunder</span>
        </div>
    )
})

export default CountDown