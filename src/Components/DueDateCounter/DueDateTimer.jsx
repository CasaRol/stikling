import '../../Styling.css'
import './dueDateStyling.css'
import CountDown from '../CountDownTimer/CountDown'
import SizeComparison from '../SizeComparison/SizeComparison'
import Slides from '../Slides/Slides'

function DueDateTimer() {
    const dueDate = new Date("2025-05-02T12:00:00")

    return (
        <div>
            <h1 className="d-flex justify-content-center align-items-center pt-3 pb-3">
                <strong>Pipling nedtælling</strong>
            </h1>
            <div className="d-flex justify-content-center align-items-center w-100">
                <img className="profilePicture border border-dark" src="./Julie.jpg" alt="Julie not found" />
                <CountDown timestampMs={dueDate} born={false} />
                <div>
                    <img className="profilePicture border border-dark" src="./Mathias.jpg" alt="Mathias not found" />
                </div>
            </div>
            <div className="row pt-3 pb-5 mw-100">
                <div className="col d-flex align-items-center">
                    <SizeComparison timestampMs={dueDate} />
                </div>
                <div className="col mt-auto mb-auto">
                    <Slides />
                </div>
                <div className="col ">
                    {/* Leave empty in order for flexboxing to work - Or at least till content is placed */}
                </div>

            </div>

        </div >
    )
}

export default DueDateTimer