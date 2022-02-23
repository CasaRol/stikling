import { useEffect, useState } from 'react'
import stikling1 from '../../images/stiklingScanning/Stikling_1.jpg'
import stikling2 from '../../images/stiklingScanning/Stikling_2.jpg'
import stikling3 from '../../images/stiklingScanning/Stikling_3.jpg'
import stikling4 from '../../images/stiklingScanning/Stikling_4.jpg'
import stikling5 from '../../images/stiklingScanning/Stikling_5.jpg'
import stikling6 from '../../images/stiklingScanning/Stikling_6.jpg'
import '../../Styling.css'

const Slides = (() => {

    const [imgURL, setImgURL] = useState(stikling6);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        let picture = [
            stikling1, stikling2, stikling3, stikling4, stikling5, stikling6
        ]

        const imageString = setInterval(() => {
            changePicture();
        }, 10000) //1 minute delay per picture
        return () => clearInterval(imageString);

        function changePicture() {
            if (currentIndex > picture.size) {
                setCurrentIndex(0)
            }
            setCurrentIndex((currentIndex + 1) % 6);
            setImgURL(picture[currentIndex])
        }

    }, [currentIndex])

    return (
        <div className="centering">
            <img className="img-responsive w-50" style={{ margin: "2rem", border: "2px solid black" }} src={imgURL} alt="Not found" />
        </div>
    )
})

export default Slides;