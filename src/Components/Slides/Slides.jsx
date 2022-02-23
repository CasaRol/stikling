//import { useEffect, useState } from 'react'
import '../../Styling.css'

let picture = "../images/stiklingScanning/Stikling_1.jpg"

const Slides = (() => {
    //const [imgURL, setImgURL] = useState();

    return (
        <div className="centering">
            <img style={{ margin: "2rem", border: "2px solid black" }} src={picture} alt="Not found" />
        </div>
    )
})

export default Slides;