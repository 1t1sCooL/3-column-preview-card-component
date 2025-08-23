import '../App.css'
import Luxury from "./Luxury/Luxury.tsx";
import SUVs from "./SUVs/SUVs.tsx";
import Sedans from "./Sedans/Sedans.tsx";
import Footer from "./Footer.tsx";

function CarGrid() {

    return (
        <>
            <section className="container">
                <h1 className="hidden">Autos</h1>
                <Sedans/>
                <SUVs/>
                <Luxury/>
            </section>
            <Footer/>
        </>
    )
}

export default CarGrid
