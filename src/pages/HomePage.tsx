import Hero from '../sections/Hero';
import About from '../sections/About';
import TwoTile from '../sections/TwoTile';
import Statement from '../sections/Statement';
import Services from '../sections/Services';
import Specialists from '../sections/Specialists';
import Stats from '../sections/Stats';
import Quality from '../sections/Quality';
import Contact from '../sections/Contact';

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <TwoTile />
            <Statement />
            <Services />
            <Specialists />
            <Stats />
            <Quality />
            <Contact />
        </>
    );
}
