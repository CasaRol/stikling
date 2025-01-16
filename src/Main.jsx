import './Styling.css'
import CountDown from './Components/CountDownTimer/CountDown'
//import Slides from './Components/Slides/Slides'
import SizeComparison from './Components/SizeComparison/SizeComparison'
import Polaroid from './Components/Slides/Polaroid'

function Main() {
    const dueDate = new Date("2025-05-02T13:00:00")
    
    const alberteBirthdayTime = "2022-08-06T20:06:00"
    const getRotation = () => {
        return Math.random() * 20 - 15;
    }


    return (
        <div className="girly pb-5">
            <h1 className="d-flex justify-content-center align-items-center w-100 pt-3 pb-3"><strong>Baby girl Stikling nedtælling</strong></h1>
            {/* Date is formatted as MM/dd/yyyy HH:mm:ss */}
            <div className="d-flex justify-content-center align-items-center w-100">
                <img className="profilePicture border border-dark" src="./Julie.jpg" alt="Julie not found" />
                <CountDown timestampMs={dateToMs(dueDate)} />
                <div>
                    <img className="profilePicture border border-dark" src="./Mathias.jpg" alt="Mathias not found" />
                </div>
            </div>
            <div className="row pt-2">
                <div className="col d-flex align-items-center">
                    <SizeComparison timestampMs={dateToMs(dueDate)} />
                </div>
                <div className="col-5">
                    <Slides />
                </div>
                <div className="col">

                {/*
                <div className="d-flex w-100 justify-content-center">
                    <Polaroid rotate={getRotation()} />
                    <Polaroid rotate={getRotation()} />
                    <Polaroid rotate={getRotation()} />
                </div>
                */}

                </div>
            </div>

        </div >
    )
}

export default Main