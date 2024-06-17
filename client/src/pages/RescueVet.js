import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Alert from "../components/UI/Alert"
import RescWorksSection from "../components/Rescue/RescWorksSection"
import RescueForm from "../components/Rescue/RescueForm"
import { toast } from "react-toastify"
import { toasterVariants } from "../utils/misc"

function RescueVet() {
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate();
  const rescueVetDataHandler = async (rescueData) => {
    console.log(rescueData)
    try {
      const response = await fetch('http://localhost:5000/rescue/post', {
        method: 'POST',
        body: JSON.stringify(rescueData),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message, toasterVariants)
        setErrors(null);
        navigate('rescue-list');
      } else {
        setErrors(result.errors || {});
      }
    } catch (error) {
      console.error('Failed to post:', error);
    }

    toast.dismiss()
    // console.log(69,postVetData);
  }

  return (
    <>
      {/* inner banner */}
      <section className="inner-banner py-5" id="rescue">
        <div className="w3l-breadcrumb mt-5 py-lg-5" data-aos="fade-up">
          <div className="container pt-4 pb-sm-4">
            <div className="hero-content" data-aos="fade-up">
              <p className="mb-2 text-warning">They need your help</p>
              <h1>Your one self initiative can save a helpless life!</h1>
            </div>
          </div>
        </div>
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
      {/* rescue a vet post form */}
      <section className="rescue-section py-5" id="rescue-post">
        <div className="container py-md-5 py-4">
          <div className="position-relative mb-lg-5 mb-4" data-aos="fade-up">
            <h3 className="title-style mb-2 text-center">Fill in the details to save a vet</h3>
            <div className="title-paw-style">
              <i className="fas fa-paw" />
              <i className="fas fa-paw paw-2" />
              <i className="fas fa-paw paw-3" />
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-lg-8 col-md-12 mt-4 px-4" data-aos="fade-right">
              {errors && <Alert className="alert-danger">
                <ul>
                  {Object.values(errors).map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </Alert>}
              <RescueForm onSubmit={rescueVetDataHandler} />
            </div>
            <div
              className="col-xl-4 col-lg-5 mt-5 medium-hide"
              data-aos="fade-left"
            >
              <img
                src="assets/images/rescue1.jpg"
                className="img-fluid radius-image"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* //rescue a vet post form */}

      {/* rescue works */}
      <RescWorksSection />
      {/* //rescue works */}

      {/* all rescue posts redirect */}
      <div className="col-12 py-5 mt-4">
        <div
          className="container position-relative mt-4 mb-lg-5 mb-4"
          data-aos="fade-up"
        >
          <h3 className="title-style mt-4 text-center">
            More for Rescue
          </h3>
          <div className="title-paw-style">
            <i className="fas fa-paw" />
            <i className="fas fa-paw paw-2" />
            <i className="fas fa-paw paw-3" />
          </div>
        </div>
        <div className="container mt-5 py-lg-5">
          <div className="pt-4 pb-sm-4">
            <div className="rescue-posts-redirect" data-aos="fade-up">
              <h1>Do you wish to help?</h1>
              <p className="mb-2 text-info">
                We have an ample list of vets and strays who are on the verge
                of dyeing. One of your true initiative can save a single of them
                and help in our growth to the public.
                Please save a little fellow by clicking on the button below
              </p>
            </div>
          </div>
          <div className="text-center col-12 mt-4">
            <Link to='rescue-list' className="btn btn-style btn-outline-primary">See More</Link>
          </div>
        </div>
      </div>

      {/* //all rescue posts redirect */}
    </>
  )
}

export default RescueVet
