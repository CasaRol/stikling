import '../../Styling.css'
import notFound from '../../images/babyNotBornYet.jpg'
import notFound2 from '../../images/404NotFound.jpg'

function NoPage() {
    return(
        <div className="centering row">
            <h1 className="centering mt-5 mb-3">This page has not been born yet...</h1>
            <img className="col-sm-4 imageblur" src={notFound2} alt='Baby not found'/>
        </div>
    )
}

export default NoPage;