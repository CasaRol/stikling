import stikling2 from '../../images/stiklingScanning/Stikling_2.jpg'
import '../../Styling.css'

const Polaroid = (({rotate}) => {

    return (
        <div className="item" style={{ transform: `rotate(${rotate}deg)` }}>
            <div className="polaroid">
                <img src={stikling2} />
                <div className="caption">INSERT CAPTION HERE</div>
            </div>
        </div>
    )
});

export default Polaroid;