import './Styling.css'
import CountDown from './Components/CountDownTimer/CountDown'
import { dateToMs } from './scripts'

function Main() {
    return (
        <div className="background">
            <h1 className="centering">Stikling nedtælling</h1>
            {/* Date is formatted as MM/dd/yyyy HH:mm:ss */}
            <div className="centering">
                <CountDown timestampMs={dateToMs(new Date("08/19/2022 12:00:00"))} />
            </div>
        </div >
    )
}

export default Main