import './Styling.css'
import CountDown from './Components/CountDownTimer/CountDown'
import { dateToMs } from './scripts'
//import Slides from './Components/Slides/Slides'
import Polaroid from './Components/Slides/Polaroid'

function Main() {
    const getRotation = () => {
        return Math.random() * 20 - 15;
    }


    return (
        <div className="peppa">
            <h1 className="d-flex justify-content-center align-items-center w-100 pt-3"><strong>Albertes alder</strong></h1>
            {/* Date is formatted as MM/dd/yyyy HH:mm:ss */}
            <div className="d-flex justify-content-center align-items-center w-100">
                <div>
                    <img className="profilePicture" src="./Julie.jpg" alt="Julie not found" />
                </div>
                <CountDown timestampMs={dateToMs(new Date("08/06/2022 20:08:00"))} />
                <div>
                    <img className="profilePicture" src="./Mathias.jpg" alt="Mathias not found" />
                </div>
            </div>
            <div className="d-flex w-100 justify-content-center">
                    <Polaroid rotate={getRotation()} />
                    <Polaroid rotate={getRotation()} />
                    <Polaroid rotate={getRotation()} />
            </div>

        </div >
    )
}

export default Main