import { useEffect, useState } from 'react'
import Pipling1 from '../../images/piplingScannings/Pipling1.jpg'
import Pipling2 from '../../images/piplingScannings/Pipling2.jpg'
import Pipling3 from '../../images/piplingScannings/Pipling3.jpg'
import Pipling4 from '../../images/piplingScannings/Pipling4.jpg'
import '../../Styling.css'

const Slides = (() => {

    const [imgURL, setImgURL] = useState(Pipling1);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        let picture = [
            Pipling1, Pipling2, Pipling3, Pipling4
        ]

        const imageString = setInterval(() => {
            changePicture();
        }, 10000) //1 minute delay per picture
        return () => clearInterval(imageString);

        function changePicture() {
            if (currentIndex > picture.size) {
                setCurrentIndex(0)
            }
            setCurrentIndex((currentIndex + 1) % 4);
            setImgURL(picture[currentIndex])
        }

    }, [currentIndex])

    return (
        <div>
            <img className="img-responsive w-100 border border-dark" src={imgURL} alt="Not found" />
        </div>
    )
})

export default Slides;