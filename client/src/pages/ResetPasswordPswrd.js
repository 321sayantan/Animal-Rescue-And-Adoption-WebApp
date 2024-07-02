import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Alert from "../components/UI/Alert";
import { toast } from "react-toastify";
import { toasterVariants } from "../utils/misc";
import EnterPasswordForm from "../components/EnterPswrdForm";
// import "https://kit.fontawesome.com/f646768ea2.js";
// import '../css/vendors.css'

function ResetPswrdFinalPage() {
    const [errors, setErrors] = useState()
    const params = useParams();
    const token = params.token;

    const emailSubmitHandler = async (enteredPswrd) => {
        console.log(enteredPswrd)
        try {
            const response = await toast.promise(
                fetch(`http://localhost:5000/user/reset-password/${token}`, {
                    method: "POST",
                    body: JSON.stringify({ newPassword: enteredPswrd }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }),
                {
                    pending: 'Processing...',
                }
            );
            const result = await response.json();
            console.log(result);

            if (response.ok) {
                console.log(result);
                // toast.info(result.message, toasterVariants)
                toast.success('Password Changed successfully', toasterVariants)
                setErrors(null);
            } else {
                toast.error(result.errors[0], toasterVariants)
                setErrors(result.errors || {});
            }
        } catch (error) {
            console.error(error)
        }
    }

    // const loadStyle = (src) => {
    //   return new Promise((resolve) => {
    //     const script = document.createElement("link");
    //     script.href = src;
    //     script.onload = () => {
    //       resolve(true);
    //     };
    //     script.onerror = () => {
    //       resolve(false);
    //     };
    //     document.head.appendChild(script);
    //   });
    // };

    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    useEffect(() => {
        // loadStyle("/assets/css/style-starter.css");
        // loadStyle("/assets/css/vendors.css");
      loadScript("https://kit.fontawesome.com/f646768ea2.js");
      loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
    //   loadScript("/assets/js/jquery-3.7.1.min.js");
    //   loadScript("/assets/js/bootstrap.min.js");
      //   loadScript("https://checkout.razorpay.com/v1/checkout.js");
        // loadScript("/assets/js/jquery.magnific-popup.min.js");
    return ()=>{document.querySelectorAll('link').forEach((e)=>{
        e.remove()
    })}
    },[]);


    return (
        <div className='col-12'>
            <div className='container password-change-form'>
                <div className="mt-4">
                    <h1 className="fs-1 fw-bolder text-dark text-center heading">Forgot your password?</h1>
                    <div className="d-flex justify-content-center">
                        <hr style={{ width: '8rem', color: '#00f', height: '3px' }} />
                    </div>
                    <div className="container px-3 py-4 mt-4 mail-changer__wrapper">
                        {errors && <Alert className="alert-danger">
                            <ul>
                                {Object.values(errors).map((err, i) => (
                                    <li key={i}>{err}</li>
                                ))}
                            </ul>
                        </Alert>}
                        <EnterPasswordForm onSubmit={emailSubmitHandler} />
                    </div>
                </div>
                <div className="below-section text-center pt-lg-6 mt-3">
                    <p className="copy-text text-secondary fw-light">
                        © 2023-24 Adopet | All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ResetPswrdFinalPage
