import { useLoaderData, defer, Await, useParams, useNavigate } from 'react-router-dom';
import { Suspense, useState, useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { AnimatePresence } from 'framer-motion';
import DonorDetailSkeleton from "../components/Adopts/DonorDetailSkeleton"
import DonorDetailsSection from "../components/Adopts/DonorDetailsSection"
import PetDetailSection from "../components/Adopts/PetDetailSection"
import PetDetailSkeleton from "../components/Adopts/PetDetailSkeleton"
import AdoptConfirmPrompt from '../components/AdoptConfirmPrompt';
import { toast } from 'react-toastify';
import { toasterVariants } from '../utils/misc';


function PetDetailsPage() {
    const { postData } = useLoaderData();
    const navigate = useNavigate()
    const params = useParams()
    const { isAuthenticated, jwt } = useContext(AuthContext)
    const [showModal, setShowModal] = useState()

    const fallback1 = <PetDetailSkeleton />,
        fallback2 = <DonorDetailSkeleton />

    const showModalHandler = () => {
        if (isAuthenticated) {
            setShowModal(true)
        } else {
            toast.info('Please sign in to get this pet')
            navigate('../../login')
        }
    }
    const closeModalHandler = () => {
        setShowModal(false)
    }

    const confirmationHandler = async (selectedDate) => {
        // const res = await postData.then(result => result)
        try {
            const dataObj = { id: params.id, selDate: selectedDate }
            const response = await toast.promise(
              fetch("https://adopet-backend.onrender.com/adoptionRequest", {
                method: "POST",
                body: JSON.stringify(dataObj),
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${jwt}`,
                },
              }),
              {
                pending: "Sending Mail...",
              }
            );

            const result = await response.json();
            console.log(response)

            if (response.ok) {
                toast.success(result.message, toasterVariants)
                navigate("..");
            } else {
                toast.error(result.error, toasterVariants)
            }
            setShowModal(false)
        } catch (error) {
            console.error('Error Sending Mail!', error);
        }
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

            {/* pet and owner details */}
            <section className="py-5" id="pet-details">
                {/* pet-details */}
                <div className="container">
                    <div className="position-relative">
                        <h3 className="title-style text-center mb-2">Pet Details</h3>
                        <div className="title-paw-style">
                            <i className="fas fa-paw" />
                            <i className="fas fa-paw paw-2" />
                            <i className="fas fa-paw paw-3" />
                        </div>
                    </div>
                    <div className="container py-md-1">
                        <div className="row align-items-center justify-content-around">
                                <Suspense fallback={fallback1}>
                                    <Await resolve={postData}>
                                        {postData => <PetDetailSection postDetails={postData} />}
                                    </Await>
                                </Suspense>
                        </div>
                    </div>
                </div>
                {/* //pet-details */}
                {/* donor-details */}
                <div className="container">
                    <div className="row align-items-center mt-5 py-4 py-md-5">
                        <div className="position-relative">
                            <h3 className="title-style text-center mb-2">Owner Details</h3>
                            <div className="title-paw-style">
                                <i className="fas fa-paw" />
                                <i className="fas fa-paw paw-2" />
                                <i className="fas fa-paw paw-3" />
                            </div>
                        </div>
                        <div className="container">
                            <Suspense fallback={fallback2}>
                                <Await resolve={postData}>
                                    {postData => <DonorDetailsSection postDetails={postData} />}
                                </Await>
                            </Suspense>
                            <div className="text-center mt-5">
                                <button type="button" className="btn btn-style btn-primary" onClick={showModalHandler}>
                                    Get this Pet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ///donor-details */}
            </section>
            {/* //pet and owner details */}

            <AnimatePresence>
                {showModal && <Await resolve={postData}>
                    {postData => <AdoptConfirmPrompt
                        onClose={closeModalHandler}
                        onConfirm={confirmationHandler}
                        vetData={postData}
                    />}
                </Await>}
            </AnimatePresence>
        </>
    )
}

export default PetDetailsPage


async function postDetailsLoader(params) {
    const id = params.id;
    const response = await fetch(
      `https://adopet-backend.onrender.com/adopt/getpost/${id}`
    );
    if (!response.ok) {
        throw new Error('Failed to load post detalis!');
    } else {
        const data = await response.json();
        return data;
    }
}

export function loader({ params }) {
    return defer({
        postData: postDetailsLoader(params)
    })
}