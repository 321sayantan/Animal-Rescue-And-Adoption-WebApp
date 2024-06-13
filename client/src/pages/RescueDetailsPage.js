import { useLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';
import RescuedVetDetailsSection from '../components/Rescue/RescuedVetDetailsSection';
import RescuerDetailsSection from '../components/Rescue/RescuerDetailsSection';
import RescVetDetSkeleton from '../components/Rescue/RescVetDetSkeleton';
import RescuerDetailSkeleton from '../components/Rescue/RescuerDetailSkeleton';

function RescueDetailsPage() {
    const { rescuePostData } = useLoaderData();

    const fallback1 = <RescVetDetSkeleton />,
        fallback2 = <RescuerDetailSkeleton />


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

            {/* vet and rescuer details */}
            <section className="py-5" id="rescue-details">
                {/* vet-details */}
                <div className="container">
                    <div className="position-relative">
                        <h3 className="title-style text-center mb-2">Vet Details</h3>
                        <div className="title-paw-style">
                            <i className="fas fa-paw" />
                            <i className="fas fa-paw paw-2" />
                            <i className="fas fa-paw paw-3" />
                        </div>
                    </div>
                    <div className="container py-md-1">
                        <div className="row align-items-center">
                            <div className="container">
                                <Suspense fallback={fallback1}>
                                    <Await resolve={rescuePostData}>
                                        {rescuePostData => <RescuedVetDetailsSection postDetails={rescuePostData} />}
                                    </Await>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //pet-details */}
                {/* donor-details */}
                <div className="container">
                    <div className="row align-items-center mt-5 py-4 py-md-5">
                        <div className="position-relative mt-5">
                            <h3 className="title-style text-center mb-2">Rescuer Details</h3>
                            <div className="title-paw-style">
                                <i className="fas fa-paw" />
                                <i className="fas fa-paw paw-2" />
                                <i className="fas fa-paw paw-3" />
                            </div>
                        </div>
                        <div className="container">
                            <Suspense fallback={fallback2}>
                                <Await resolve={rescuePostData}>
                                    {rescuePostData => <RescuerDetailsSection postDetails={rescuePostData} />}
                                </Await>
                            </Suspense>
                            <div className="text-center mt-5">
                                <button type="button" className="btn btn-style btn-primary">
                                    Save this Vet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ///donor-details */}
            </section>
            {/* //pet and owner details */}
        </>
    )
}

export default RescueDetailsPage

async function rescueDetailsLoader(params) {
    const id = params.id;
    const response = await fetch(`http://localhost:5000/rescue/getrescue/${id}`);
    if (!response.ok) {
        throw new Error('Failed to load post detalis!');
    } else {
        const data = await response.json();
        return data;
    }
}

export function loader({ params }) {
    return defer({
        rescuePostData: rescueDetailsLoader(params)
    })
}
