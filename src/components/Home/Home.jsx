import { Slideshow } from '../slider/slider'
import 'react-slideshow-image/dist/styles.css'
import Products from '../products/products'
import Footer from '../footer/footer'


export default function Home() {

    return (
        <div className="container">
            <div style={{ width: "100%" }} className='Slider'>
                <Slideshow />
            </div>
            < Products />
            <div>
                <Footer />
            </div>
        </div>

    )
}