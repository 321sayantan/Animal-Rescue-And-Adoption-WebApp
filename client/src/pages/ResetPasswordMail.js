import { useState } from "react";
import EnterMailForm from "../components/EnterMailForm"
import Alert from "../components/UI/Alert";
import { toast } from "react-toastify";
import { toasterVariants } from "../utils/misc";

function ChangePassword() {
    const [errors, setErrors] = useState()

    let notificationAlert;
    const emailSubmitHandler = async (enteredMail) => {
        // console.log(enteredMail)
        try {
            const response = await toast.promise(
                fetch("http://localhost:5000/forgot-pswrd", {
                    method: "POST",
                    body: JSON.stringify({ mail: enteredMail }),
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
                notificationAlert = (
                    <Alert className="alert-success">
                        <div className="d-flex justify-content-center align-items-center">
                            <h3>Link Generated Successfully</h3>
                            <p>We have sent a link to your provided email-id <em>{enteredMail}</em>.
                                Please check it and click on 'Reset Password' button to create new password.
                            </p>
                        </div>
                    </Alert>
                )
                // toast.info(result.message, toasterVariants)
                toast.info('Reset Link sent to your email', { ...toasterVariants, autoClose: 15000 })
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
                    {notificationAlert}
                    <div className="container px-3 py-4 mt-4 mail-changer__wrapper">
                        {errors && <Alert className="alert-danger">
                            <ul>
                                {Object.values(errors).map((err, i) => (
                                    <li key={i}>{err}</li>
                                ))}
                            </ul>
                        </Alert>}
                        <EnterMailForm onSubmit={emailSubmitHandler} />
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

export default ChangePassword
