import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../components/UI/Alert";
import { toast } from "react-toastify";
import { toasterVariants } from "../utils/misc";
import EnterPasswordForm from "../components/EnterPswrdForm";


function ResetPswrdFinalPage() {
    const [errors, setErrors] = useState()
    const navigate = useNavigate()
    const params = useParams();
    const token = params.token;

    const emailSubmitHandler = async (enteredPswrd) => {
        console.log(enteredPswrd)
        try {
            const response = await toast.promise(
              // fetch(`http://localhost:5000/user/reset-password/${token}`, {
              fetch(
                `https://adopet-backend.onrender.com/user/reset-password/${token}`,
                {
                  method: "POST",
                  body: JSON.stringify({ newPassword: enteredPswrd }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              ),
              {
                pending: "Processing...",
              }
            );
            const result = await response.json();
            console.log(result);

            if (response.ok) {
                console.log(result);
                toast.success('Password Changed successfully', toasterVariants);
                navigate('../login')
                setErrors(null);
            } else {
                toast.error(result.errors[0], toasterVariants)
                setErrors(result.errors || {});
            }
        } catch (error) {
            console.error(error)
        }
    }


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
