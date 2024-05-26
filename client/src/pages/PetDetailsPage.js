import { Link } from "react-router-dom"

function PetDetailsPage() {
    return (
        <>
            {/* inner banner */}
            <section className="inner-banner py-5">
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
                        <path fillOpacity={1}>
                            <animate
                                attributeName="d"
                                dur="20000ms"
                                repeatCount="indefinite"
                                values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                           M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;"
                            />
                        </path>
                    </svg>
                </div>
            </section>
            {/* //inner banner */}
            {/* pet and owner details */}
            <section className="w3l-homeblock1 py-5">
                <div
                    className="col-xl-5 col-lg-6 offset-xl-1 ps-xl-0 mt-lg-0 mt-5 tab-hide"
                    data-aos="fade-left"
                >
                    <img
                        src="assets/images/about1.jpg"
                        className="img-fluid radius-image"
                        alt=""
                    />
                </div>
                <div
                    className="col-lg-6 ps-lg-5 mb-lg-0 mb-5 order-lg-last order-first"
                    data-aos="fade-left"
                >
                    <div className="position-relative">
                        <h3 className="title-style mb-3">
                            We will make them truly happy
                        </h3>
                        <div className="title-paw-style">
                            <i className="fas fa-paw" />
                            <i className="fas fa-paw paw-2" />
                            <i className="fas fa-paw paw-3" />
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.{" "}
                    </p>
                    <div className="mt-4">
                        <ul className="service-list">
                            <li className="service-link">
                                <Link to="about">
                                    <i className="fas fa-check-circle" />
                                    certified groomer
                                </Link>
                            </li>
                            <li className="service-link">
                                <Link to="about">
                                    <i className="fas fa-check-circle" />
                                    20 years of experience
                                </Link>
                            </li>
                            <li className="service-link">
                                <Link to="about">
                                    <i className="fas fa-check-circle" />
                                    Animal Lover
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="about" className="btn btn-style mt-4">
                        Learn More
                    </Link>
                </div>
            </section>
            {/* //pet and owner details */}
        </>
    )
}

export default PetDetailsPage
