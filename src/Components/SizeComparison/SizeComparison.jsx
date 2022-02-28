import { useState, useEffect } from 'react'
import { getRemainingTime } from '../../scripts';
import week13 from '../../images/size/week13.jpg'
import week14 from '../../images/size/week14.jpg'
import week15 from '../../images/size/week15.jpg'
import week16 from '../../images/size/week16.jpg'
import week17 from '../../images/size/week17.jpg'
import week18 from '../../images/size/week18.jpg'
import week19 from '../../images/size/week19.jpg'
import week20 from '../../images/size/week20.jpg'
import week21 from '../../images/size/week21.jpg'
import week22 from '../../images/size/week22.jpg'
import week23 from '../../images/size/week23.jpg'
import week24 from '../../images/size/week24.jpg'
import week25 from '../../images/size/week25.jpg'
import week26 from '../../images/size/week26.jpg'
import week27 from '../../images/size/week27.jpg'
import week28 from '../../images/size/week28.jpg'
import week29 from '../../images/size/week29.jpg'
import week30 from '../../images/size/week30.jpg'
import week31 from '../../images/size/week31.jpg'
import week32 from '../../images/size/week32.jpg'
import week33 from '../../images/size/week33.jpg'
import week34 from '../../images/size/week34.jpg'
import week35 from '../../images/size/week35.jpg'
import week36 from '../../images/size/week36.jpg'
import week37 from '../../images/size/week37.jpg'
import week38 from '../../images/size/week38.jpg'
import week39 from '../../images/size/week39.jpg'
import week40 from '../../images/size/week40.jpg'


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const defaultData = {
    weekNumber: "NaN",
    text: "Default",
    image: "No data",
    dataUrl: "#"
}



const SizeComparison = (({ timestampMs }) => {

    const [week, setWeeks] = useState(defaultRemainingTime.days);

    const [weekData, setWeekData] = useState(defaultData);



    useEffect(() => {
        updateDaysLeft(timestampMs)

        console.log(week)

        getWeekData()

        const intervalId = setInterval(() => {
            updateDaysLeft(timestampMs);
        }, 30000)

        return () => clearInterval(intervalId);

    }, [timestampMs, week])

    function getWeekData() {
        console.log(week)
        currentWeekData(week)

    }

    function updateDaysLeft(timeStamp) {
        setWeeks(Math.floor(40 - ((getRemainingTime(timeStamp).days + 1) / 7)));
    }

    function currentWeekData(weekNumber) {

        switch (weekNumber) {
            case 13:
                setWeekData({
                    weekNumber: 13,
                    text: "Stikling måler omkring 8.5cm og er på størrelse med en fersken",
                    image: week13,
                    dataUrl: "https://www.femina.dk/liv/gravid/gravid-uge-13-tid-til-tage-hul-paa-2-trimester"
                })
                break;
            case 14:
                setWeekData({
                    weekNumber: 14,
                    text: "Stikling er nu omkring 13cm - Omtrent som en citron",
                    image: week14,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-14-tisser-og-drikker"
                })
                break;
            case 15:
                setWeekData({
                    weekNumber: 15,
                    text: "Stikling er nu cirka 15cm og på størrelse med et æble",
                    image: week15,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-15-oever-vejrtraekning"
                })
                break;
            case 16:
                setWeekData({
                    weekNumber: 16,
                    text: "Stikling er omrking 16cm - Omtrent som en appelsin",
                    image: week16,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-16-tid-til-fostervandsproeve"
                })
                break;
            case 17:
                setWeekData({
                    weekNumber: 17,
                    text: "Stikling er nu ca 17cm - Omtrent som en avokado",
                    image: week17,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-17-danner-et-fedtlag"
                })
                break;
            case 18:
                setWeekData({
                    weekNumber: 18,
                    text: "Stikling er omkring 18cm og på størrelse med en sød kartoffel",
                    image: week18,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-18-gang-i-maven"
                })
                break;
            case 19:
                setWeekData({
                    weekNumber: 19,
                    text: "Stikling måler omkring 19cm og er på størrelse med en stor peberfrugt",
                    image: week19,
                    dataUrl: "https://www.femina.dk/liv/gravid/gravid-uge-19-hoerelsen-udvikles"
                })
                break;
            case 20:
                setWeekData({
                    weekNumber: 20,
                    text: "Stikling måler omkring 20cm og er på størrelse med en stor grapefrugt",
                    image: week20,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-20-hoerer-din-stemme"
                })
                break;
            case 21:
                setWeekData({
                    weekNumber: 21,
                    text: "Stikling er nu omkring 22cm og på størrelse med et granatæble",
                    image: week21,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-21-fitness-i-maven"
                })
                break;
            case 22:
                setWeekData({
                    weekNumber: 22,
                    text: "Stikling er nu omkring 25cm og på størrelse med en mango",
                    image: week22,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-22-tynd-og-rynket"
                })
                break;
            case 23:
                setWeekData({
                    weekNumber: 23,
                    text: "Stikling er cirka 28cm og på størrelse med en papaya",
                    image: week23,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-23-lytter-og-droemmer"
                })
                break;
            case 24:
                setWeekData({
                    weekNumber: 24,
                    text: "Stikling er omkring 30cm - omtrent ligesom en artiskok",
                    image: week24,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-24-reagerer-paa-dit-humoer"
                })
                break;
            case 25:
                setWeekData({
                    weekNumber: 25,
                    text: "Stikling er nu cirka 31cm og på størrelse med en broccoli",
                    image: week25,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-25-lungerne-modnes"
                })
                break;
            case 26:
                setWeekData({
                    weekNumber: 26,
                    text: "Stikling er omkring 32cm og på størrelse med en pomelo",
                    image: week26,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-26-oejnene-faerdigudvikles"
                })
                break;
            case 27:
                setWeekData({
                    weekNumber: 27,
                    text: "Stikling måler omkring 33cm og er på størrelse med en knoldselleri",
                    image: week27,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-27-smager-paa-fostervandet"
                })
                break;
            case 28:
                setWeekData({
                    weekNumber: 28,
                    text: "Stikling måler omkring 35cm - omtrent som et spidskålshoved",
                    image: week28,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-28-vokser-og-modnes"
                })
                break;
            case 29:
                setWeekData({
                    weekNumber: 29,
                    text: "Stikling måler nu cirka 36cm og er på størrelse med et rødkålshoved",
                    image: week29,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-29-barnet-er-levedygtigt"
                })
                break;
            case 30:
                setWeekData({
                    weekNumber: 30,
                    text: "Stikling er nu omkring 37cm og på størrelse med et blomkålshoved",
                    image: week30,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-29-barnet-er-levedygtigt"
                })
                break;
            case 31:
                setWeekData({
                    weekNumber: 31,
                    text: "Stikling måler cirka 38cm - omtrent som en kokosnød",
                    image: week31,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-31-kraftig-vaekst"
                })
                break;
            case 32:
                setWeekData({
                    weekNumber: 32,
                    text: "Stikling er ca. 40cm - omkring ligesom et hvidkålshoved",
                    image: week32,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-32-affoeringen-er-klar"
                })
                break;
            case 33:
                setWeekData({
                    weekNumber: 33,
                    text: "Stikling måler nu cirka 42cm - omtrent som en ananas",
                    image: week33,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-33-kan-traekke-vejret"
                })
                break;
            case 34:
                setWeekData({
                    weekNumber: 34,
                    text: "Stikling er cirka 43cm og på størrelse med en netmelon",
                    image: week34,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-34-gaar-inde-i-maven"
                })
                break;
            case 35:
                setWeekData({
                    weekNumber: 35,
                    text: "Stikling er cirka 44cm - omtrent som en honningmelon",
                    image: week35,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-35-fylder-livmoderen-ud"
                })
                break;
            case 36:
                setWeekData({
                    weekNumber: 36,
                    text: "Stikling er nu cirka 45cm og på størrelse med et romaine-salathoved",
                    image: week36,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-36-med-hovedet-nedad"
                })
                break;
            case 37:
                setWeekData({
                    weekNumber: 37,
                    text: "Stikling er nu cirka 47cm langt - omtrent som et bladbede-bundt",
                    image: week37,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-37-fuldbaarent-barn"
                })
                break;
            case 38:
                setWeekData({
                    weekNumber: 38,
                    text: "Stikling er nu omkring 49-50cm og cirka så langt som en porre",
                    image: week38,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-38-foedt-til-tiden"
                })
                break;
            case 39:
                setWeekData({
                    weekNumber: 39,
                    text: "Stikling er omkring 50-51cm og på størrelse med en stor vandmelon",
                    image: week39,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-39-lagrene-opbygges"
                })
                break;
            case 40:
                setWeekData({
                    weekNumber: 40,
                    text: "Stikling er cirka 51-52 cm og på størrelse med et stort græskar",
                    image: week40,
                    dataUrl: "https://www.femina.dk/gravid/gravid-uge-uge/uge-40-snart-klar"
                })
                break;
            default:
                setWeekData({
                    weekNumber: "",
                    text: "",
                    image: "",
                    dataUrl: ""
                })
                break;
        }
    }

    function moreInfo(url) {
        window.open(url)
    }

    return (
        <div className="d-flex flex-column bg-black bg-opacity-25 m-3 rounded border border-dark">
            <h4 className="text-center mt-3"><strong>Uge: {weekData.weekNumber}</strong></h4>
            <span className="text-center m-3"><strong>{weekData.text}</strong></span>
            <img className="rounded mx-auto w-50 border border-dark" src={weekData.image} alt="Not found" />
            <div className="text-center">
                <button className="btn btn-dark btn-outline-dark w-75 m-3 text-white" onClick={() => moreInfo(weekData.dataUrl)}><strong>Mere info om denne uge</strong></button>
            </div>
        </div>
    );
})

export default SizeComparison;