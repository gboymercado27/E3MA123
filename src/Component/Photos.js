import pics1 from '../pic1.jpg' 
import pics2 from '../pic2.jpg'
import pics3 from '../pic3.jpg'
import pics4 from '../pic4.jpg'

const Photos = ({title1}) => {
    return (
        <section className="photo-right">
            <h1>{title1}</h1> 
            <div className="photos">
                <div className="row">
                    <img className="photo" src={pics1} alt = "resto 1"/>
                    <img className="photo" src={pics2} alt = "resto 2"/>
                </div>
                <div className="row">
                    <img className="photo" src={pics3} alt = "resto3"/>
                    <img className="photo" src={pics4} alt = "resto4"/>
                </div>
            </div>
        </section>
    )
}

export default Photos