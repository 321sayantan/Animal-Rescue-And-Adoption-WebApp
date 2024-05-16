import { Link } from 'react-router-dom';
import CountUp, { useCountUp } from 'react-countup';
import ClientsTestimonial from '../components/Home/ClientsTestimonial';
// import { useEffect } from 'react';

function Home() {
    useCountUp({
        ref: 'count-number',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        scrollSpyOnce: true
    })

    return (
        <>
            {/* hero slider Start */}
            <div className="banner-wrap">
                <div className="banner-slider">
                    {/* hero slide start */}
                    <div className="banner-slide bg1">
                        <div className="container">
                            <div className="hero-content" data-aos="fade-up">
                                <p className="mb-2">Pets Love </p>
                                <h1>Provide your pets the best possible care!</h1>
                                <Link to="#about" className="btn btn-style btn-primary">View More</Link>

                            </div>
                        </div>
                        <div className="hero-overlay" />
                    </div>
                    {/* hero slide end */}
                </div>
                <div className="shape" data-aos="fade-up">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
                        <path fillOpacity={1}>
                            <animate attributeName="d" dur="20000ms" repeatCount="indefinite" values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                           M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;" />
                        </path>
                    </svg>
                </div>
            </div>
            {/* hero slider end */}
            {/* about section */}
            <section className="home-about-w3l py-5">
                <div className="container py-md-5 py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-5" data-aos="fade-up">
                            <div className="position-relative">
                                <h3 className="title-style mb-3">How we can help you properly</h3>
                                <div className="title-paw-style">
                                    <i className="fas fa-paw" />
                                    <i className="fas fa-paw paw-2" />
                                    <i className="fas fa-paw paw-3" />
                                </div>
                            </div>
                            <p className="text-para">Aurabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                                lacinia est. Quisque ut lectus consequat, venenatis eros et, sed commodo risus. Nullam sit
                                amet laoreet elit. Suspendisse non init magnaa velit efficitur, dolor eget ex fermentum.
                            </p>
                            <div className="cta-btn d-flex gap-4 mt-sm-5 mt-4" data-aos="fade-right">
                                <Link to="about" className="btn btn-style " >Discover More</Link>
                                <Link to="rescue" className="btn btn-style btn-outline-primary">Rescue a stray</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-5" data-aos="fade-up">
                            <div className="row">
                                <div className="col-6 grids-1" data-aos="fade-down">
                                    <i className="fab fa-medrt color-1" />
                                    <h4 className="title-head mt-2 mb-3">Full diagnostics</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit oluptatem.</p>
                                </div>
                                <div className="col-6 grids-1" data-aos="fade-down">
                                    <i className="fas fa-medal color-3" />
                                    <h4 className="title-head mt-2 mb-3">Awarded service</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit oluptatem.</p>
                                </div>
                                <div className="col-6 grids-1 mt-5" data-aos="fade-down">
                                    <i className="fas fa-bone color-2" />
                                    <h4 className="title-head mt-2 mb-3">Dog Breeding</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit oluptatem.</p>
                                </div>
                                <div className="col-6 grids-1 mt-5" data-aos="fade-down">
                                    <i className="fas fa-paw color-4" />
                                    <h4 className="title-head mt-2 mb-3">Dog Training</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit oluptatem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section */}
            {/* aboutblock1 section */}
            <section className="w3l-homeblock1 py-5" id="about">
                <div className="container py-md-5 py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6 homeaboutblock order-lg-first order-last" data-aos="fade-right">
                            <div className="position-relative img-border">
                                <img src="assets/images/video.jpg" className="img-fluid video-popup-image radius-image" alt="" />
                                <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                                    <span className="video-play-icon">
                                        <span className="fa fa-play" />
                                    </span>
                                </a>
                                {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                                <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                                    <iframe title='sample-video' src="https://player.vimeo.com/video/436935040" allowFullScreen />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5 mb-lg-0 mb-5 order-lg-last order-first" data-aos="fade-left">
                            <div className="position-relative">
                                <h3 className="title-style mb-3">We will make them truly happy</h3>
                                <div className="title-paw-style">
                                    <i className="fas fa-paw" />
                                    <i className="fas fa-paw paw-2" />
                                    <i className="fas fa-paw paw-3" />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore. </p>
                            <div className="mt-4">
                                <ul className="service-list">
                                    <li className="service-link"><Link to="about"><i className="fas fa-check-circle" />certified
                                        groomer</Link></li>
                                    <li className="service-link"><Link to="about"><i className="fas fa-check-circle" />20 years of
                                        experience</Link></li>
                                    <li className="service-link"><Link to="about"><i className="fas fa-check-circle" />Animal Lover</Link></li>
                                </ul>
                            </div>
                            <Link to="about" className="btn btn-style mt-4">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* //aboutblock1 section */}
            {/* faq section */}
            <div className="w3l-faq-block py-5" id="faq">
                <div className="container py-lg-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 pe-lg-5 order-lg-first order-last" data-aos="fade-down">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            01. Why pet is a part of our life?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                            qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beat vitaedicta
                                            sunt explicabo.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            02. How we take care about our pet?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                            qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beat vitaedicta
                                            sunt explicabo.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            03. Which pet you choose and why?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                            qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beat vitaedicta
                                            sunt explicabo.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-lg-0 mb-5 order-lg-last order-first" data-aos="fade-up">
                            <div className="position-relative">
                                <h3 className="title-style mb-3">We are working for the community</h3>
                                <div className="title-paw-style">
                                    <i className="fas fa-paw" />
                                    <i className="fas fa-paw paw-2" />
                                    <i className="fas fa-paw paw-3" />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore. </p>
                            <p className="mt-2 mb-sm-5 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore. </p>
                            <a href="tel:+(21) 255 999 8888" className="call-style d-flex align-items-center"><i className="fas fa-phone-volume me-2" /> +(21) 255
                                999 8888</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* //faq section */}
            {/* grids section */}
            <section className="w3l-bottom-grids-6 pb-5 pt-4" id="services">
                <div className="container pb-lg-5 pb-4">
                    <div className="row justify-content-center" data-aos="fade-down">
                        <div className="col-lg-4 col-md-6">
                            <div className="area-box">
                                <i className="fas fa-hand-holding-heart" />
                                <h4><Link to="services" className="title-head">Pet Care</Link></h4>
                                <p>Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et
                                    dolor amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                            <div className="area-box">
                                <i className="fas fa-paw" />
                                <h4><Link to="services" className="title-head">Dog Training</Link></h4>
                                <p>Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor
                                    et amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                            <div className="area-box">
                                <i className="fas fa-dog" />
                                <h4><Link to="services" className="title-head">Dog Vacation</Link></h4>
                                <p>Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor
                                    et amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //grids section */}
            {/* stats section */}
            <section className="homeblock-stats py-5" id="stats">
                <div className="container py-md-5 py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="position-relative">
                                <h3 className="title-style mb-2">Our activities &amp; experience</h3>
                                <div className="title-paw-style">
                                    <i className="fas fa-paw" />
                                    <i className="fas fa-paw paw-2" />
                                    <i className="fas fa-paw paw-3" />
                                </div>
                            </div>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.</p>
                            <div className="row mt-4 pt-2">
                                <div className="col-6">
                                    <div className="counter color-bg-1">
                                        <div className="count-title d-flex align-items-center">
                                            <CountUp start={0} end={630} enableScrollSpy scrollSpyOnce>
                                                <div className="count-number" />
                                            </CountUp>
                                            <span className="ms-2">+</span>
                                        </div>
                                        <p className="count-text">Happy Clients</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="counter color-bg-2">
                                        <div className="count-title d-flex align-items-center">
                                            <CountUp start={0} end={80} enableScrollSpy scrollSpyOnce>
                                                <div className="count-number" />
                                            </CountUp>
                                            <span className="ms-2">+</span>
                                        </div>
                                        <p className="count-text">Professionals</p>
                                    </div>
                                </div>
                                <div className="col-6 mt-4">
                                    <div className="counter color-bg-3">
                                        <div className="count-title d-flex align-items-center">
                                            <CountUp start={0} end={820} enableScrollSpy scrollSpyOnce>
                                                <div className="count-number" />
                                            </CountUp>
                                            <span className="ms-2">+</span>
                                        </div>
                                        <p className="count-text">Adopted Pets</p>
                                    </div>
                                </div>
                                <div className="col-6 mt-4">
                                    <div className="counter color-bg-4">
                                        <div className="count-title d-flex align-items-center">
                                            <CountUp start={0} end={90} enableScrollSpy scrollSpyOnce>
                                                <div className="count-number" />
                                            </CountUp>
                                            <span className="ms-2">+</span>
                                        </div>
                                        <p className="count-text">Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1 ps-xl-0 mt-lg-0 mt-5" data-aos="fade-left">
                            <img src="assets/images/about1.jpg" className="img-fluid radius-image" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* //stats section */}
            {/* blog section */}
            <div className="w3l-grids-block-5 blog-bg-sec py-5" id="blog">
                <div className="container py-md-5 py-4">
                    <div className="position-relative mb-lg-5 mb-4">
                        <h3 className="title-style mb-2 text-center">Latest Blog Post</h3>
                        <div className="title-paw-style">
                            <i className="fas fa-paw" />
                            <i className="fas fa-paw paw-2" />
                            <i className="fas fa-paw paw-3" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 grids5-info" data-aos="fade-right">
                            <a href="#blog"><img src="assets/images/blog1.jpg" alt="" className="img-fluid radius-image" /></a>
                            <div className="blog-info-grid">
                                <h5><span className="fa fa-clock-o" /> Aug 1, 2021</h5>
                                <h4><a href="#blog">Domestic animals can save you from loneliness</a></h4>
                                <div className="blog-info mt-3">
                                    <a href="#read">Read More <span className="fa fa-arrow-right ms-1" /></a>
                                    <a href="#comments"><span className="fa fa-comment-o" /> 3 comments</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids5-info mt-md-0 mt-5" data-aos="fade-up">
                            <a href="#blog"><img src="assets/images/blog2.jpg" alt="" className="img-fluid radius-image" /></a>
                            <div className="blog-info-grid">
                                <h5><span className="fa fa-clock-o" /> Aug 2, 2021</h5>
                                <h4><a href="#blog">How to bond with your new rescue pet? </a></h4>
                                <div className="blog-info mt-3">
                                    <a href="#read">Read More <span className="fa fa-arrow-right ms-1" /></a>
                                    <a href="#comments"><span className="fa fa-comment-o" /> 3 comments</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids5-info mt-lg-0 mt-5" data-aos="fade-left">
                            <a href="#blog"><img src="assets/images/blog3.jpg" alt="" className="img-fluid radius-image" /></a>
                            <div className="blog-info-grid">
                                <h5><span className="fa fa-clock-o" /> Aug 3, 2021</h5>
                                <h4><a href="#blog">What happens if a dog doesn&apos;t get adopted? </a></h4>
                                <div className="blog-info mt-3">
                                    <a href="#read">Read More <span className="fa fa-arrow-right ms-1" /></a>
                                    <a href="#comments"><span className="fa fa-comment-o" /> 3 comments</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* //blog section */}
            {/* testimonials */}
            <ClientsTestimonial />
            {/* //testimonials */}
        </>

    )
}

export default Home;
