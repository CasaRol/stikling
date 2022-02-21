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
                <img className="profilePicture" src="./Julie.jpg" alt="Julie not found" />
                <CountDown timestampMs={dateToMs(new Date("08/19/2022 12:00:00"))} />
                <img className="profilePicture" src="./Mathias.jpg" alt="Mathias not found" />
            </div>
            <Slides />
        </div >
    )
}

export default Main