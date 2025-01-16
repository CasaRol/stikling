import './Styling.css'
import CountDown from './Components/CountDownTimer/CountDown'
import { dateToMs } from './scripts'
import Slides from './Components/Slides/Slides'

function Main() {
    const dueDate = new Date("05/02/2025 13:00:00")
    
    return (
        <div className="girly">
            <h1 className="d-flex justify-content-center align-items-center w-100 pt-3"><strong>Baby girl Stikling nedtælling</strong></h1>
            {/* Date is formatted as MM/dd/yyyy HH:mm:ss */}
            <div className="d-flex justify-content-center align-items-center w-100">
                <img className="profilePicture" src="./Julie.jpg" alt="Julie not found" />
                <CountDown timestampMs={dateToMs(new Date("08/16/2022 12:00:00"))} />
                <div>
                    <img className="profilePicture" src="./Mathias.jpg" alt="Mathias not found" />
                </div>
            </div>
            <div>
                <Slides />
            </div>

        </div >
    )
}

export default Main