import './Styling.css'
import CountDown from './Components/CountDownTimer/CountDown'
import { dateToMs } from './scripts'
import Slides from './Components/Slides/Slides'

function Main() {
    return (
        <div className="background">
            <h1 className="centering">Stikling nedtælling</h1>
            {/* Date is formatted as MM/dd/yyyy HH:mm:ss */}
            <div className="centering">
                <CountDown timestampMs={dateToMs(new Date("08/19/2022 12:00:00"))} />
            </div>
            <Slides />
        </div >
    )
}

export default Main