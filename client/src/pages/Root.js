import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../components/UI/Footer';
import Navbar from '../components/UI/Navbar';

const Root = () => {
    const { pathname } = useLocation();

    // When the user clicks on the button, scroll to the top of the document
    function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        // <!-- AOS initialisation -->
        AOS.init({
            offset: 100,
            duration: 700,
            easing: "ease-in-out",
            delay: 400,
            once: true,
        });
        // <!-- //AOS init -->
    })

    // <!-- initiate smooth sroll to section on hyperlink action -->
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    //   <!-- initiate smooth sroll to section on hyperlink action -->

    return (
        <>
            {/* header */}
            <Navbar />

            {/* inner body */}
            <main>
                <Outlet />
            </main>

            {/* footer */}
            <Footer />
            {/* move top button */}
            <button onClick={goToTop} id="movetop" title="Go to top" data-aos="fade-up">
                <span className="fas fa-level-up-alt" aria-hidden="true" />
            </button>
        </>
    )
}

export default Root

export function loader() {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        // if (currentTheme === "dark") ;
    }

    return null;
}
