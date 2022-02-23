import { useEffect, useState } from 'react'
import '../../Styling.css'

const Slides = (() => {

    const [imgURL, setImgURL] = useState("https://raw.githubusercontent.com/CasaRol/stikling/master/src/images/stiklingScanning/Stikling_6.jpg");
    const [currentIndex, setCurrentIndex] = useState(0);



    /*
    function changePicture() {
        if (currentIndex > picture.size) {
            setCurrentIndex(0)
        }
        setCurrentIndex((currentIndex + 1) % 6);
        setImgURL(picture[currentIndex])
    }
    */

    useEffect(() => {

        let picture = [
            "https://raw.githubusercontent.com/CasaRol/stikling/master/src/images/stiklingScanning/Stikling_1.jpg",
            "https://raw.githubusercontent.com/CasaRol/stikling/master/src/images/stiklingScanning/Stikling_2.jpg",
            "https://raw.githubusercontent.com/CasaRol/stikling/master/src/images/stiklingScanning/Stikling_3.jpg",
            "https://raw.githubusercontent.com/CasaRol/stikling/master/src/images/stiklingScanning/Stikling_4.jpg",
            "https://raw.githubusercontent.com/CasaRol/stikling/master/src/images/stiklingScanning/Stikling_5.jpg",
            "https://raw.githubusercontent.com/CasaRol/stikling/master/src/images/stiklingScanning/Stikling_6.jpg"
        ]

        const imageString = setInterval(() => {
            changePicture();
        }, 10000) //1 minute delay per picture
        return () => clearInterval(imageString);

        function changePicture() {
            console.log("index " + currentIndex)
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