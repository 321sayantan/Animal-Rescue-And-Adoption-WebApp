import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <>
            {/* inner banner */}
            <section className="inner-banner py-5">
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
                        <path fillOpacity={1}>
                            <animate attributeName="d" dur="20000ms" repeatCount="indefinite" values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                           M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;" />
                        </path>
                    </svg>
                </div>
            </section>
            {/* //inner banner */}
            {/* login section */}
            <section className="homeblock-stats py-5" id="login">
                <div className="container py-md-5 py-4">
                    <div className="position-relative mb-lg-5 mb-4">
                        <h3 className="title-style mb-2 text-center">Login</h3>
                        <div className="title-paw-style">
                            <i className="fas fa-paw" />
                            <i className="fas fa-paw paw-2" />
                            <i className="fas fa-paw paw-3" />
                        </div>
                    </div>
                    <div className="row align-items-start">
                        <div className="col-lg-6 mt-4" data-aos="fade-right">

                            <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                                <div className="form-input mb-4">
                                    <a className="btn btn-style btn-outline-primary" href="#0" id="GoogleLogin">Login with Google</a>
                                </div>
                                <div className="seperator">
                                    <hr /><span id="or-text">Or</span>
                                </div>
                                <div className="form-input mt-4">
                                    <input type="email" name="useremail" id="w3lSender" placeholder="Your email address" required />
                                </div>
                                <div className="form-input">
                                    <input type="password" name="userpassword" id="w3lPasswrd" placeholder="Your Password" />
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-style btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1 ps-xl-0 mt-lg-0 mt-5 tab-hide" data-aos="fade-left">
                            <img src="assets/images/about1.jpg" className="img-fluid radius-image" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* //stats section */}
        </>
    )
}

export default LoginPage
