import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import { toast } from "react-toastify";
import Alert from "../components/UI/Alert";
import { toasterVariants } from "../utils/misc";


function RegisterPage() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState()

  const SignUpHandler = async (userData) => {
    try {
      const response = await fetch('https://adopet-54d51-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Registration Successful.', toasterVariants);
        setErrors(null);
        navigate('..');
      } else {
        setErrors(result.errors || {});
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    console.log(userData);
    // navigate('..');
  }

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
      {/* signup section */}
      <section className="register-section py-5" id="signup">
        <div className="container py-md-5 py-4">
          <div className="position-relative mb-lg-5 mb-4">
            <h3 className="title-style mb-2 text-center">Sign Up</h3>
            <div className="title-paw-style">
              <i className="fas fa-paw" />
              <i className="fas fa-paw paw-2" />
              <i className="fas fa-paw paw-3" />
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-lg-7 mt-4 px-4" data-aos="fade-right">
              {errors && <Alert className="alert-danger">
                <ul>
                  {Object.values(errors).map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </Alert>}
              <SignupForm onSubmit={SignUpHandler} />
            </div>
            <div
              className="col-xl-5 col-lg-5 mt-5 tab-hide"
              data-aos="fade-left"
            >
              <img
                src="assets/images/about4.jpg"
                className="img-fluid radius-image"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* //signup section */}

    </>
  );
}

export default RegisterPage;
