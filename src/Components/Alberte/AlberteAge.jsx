import '../../Styling.css'
import Polaroid from '../Slides/Polaroid'
import CountDown from '../CountDownTimer/CountDown'

function AlberteAge() {
    const alberteBirthdayTime = "2022-08-06T20:06:00"
    const getRotation = () => {
        return Math.random() * 10 - 5;
    }


    return (
        <div className="peppa pb-5">
            <h1 className="d-flex justify-content-center align-items-center w-100 pt-3 pb-3"><strong>Albertes alder</strong></h1>
            {/* Date is formatted as MM/dd/yyyy HH:mm:ss */}
            <div className="d-flex justify-content-center align-items-center w-100">
                <img className="profilePicture border border-dark" src="./Julie.jpg" alt="Julie not found" />
                <CountDown timestampMs={alberteBirthdayTime} born={true} />
                <div>
                    <img className="profilePicture border border-dark" src="./Mathias.jpg" alt="Mathias not found" />
                </div>
            </div>
            <div className="row pt-2">
                <div className="d-flex w-100 justify-content-center">
                    <Polaroid rotate={getRotation()} />
                    <Polaroid rotate={getRotation()} />
                    <Polaroid rotate={getRotation()} />
                </div>
            </div>
        </div>
    )
}

export default AlberteAge