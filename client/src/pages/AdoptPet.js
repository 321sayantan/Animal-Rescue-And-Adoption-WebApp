import { useState, Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";
import PostsSkeleton from "../components/Adopts/PostsSkeleton"
import PostsList from "../components/Adopts/PostsList";
import SearchByLocationPanel from "../components/Adopts/SearchByLocationPanel";
import { petCategList as categories } from "../utils/misc";
import MapContainer from "../components/MapContainer";


function AdoptPet() {
    const [searchTerm, setSearchTerm] = useState();
    const [selectedVal, setSelectedVal] = useState('')
    const { posts } = useLoaderData()

    const fallback = <PostsSkeleton />

    // useEffect(() => {
    //     setShowMap(false)
    // }, [])

    const setSearchQueryHandler = (locData) => {
        setSearchTerm(locData)
    }

    const filterHandler = (e) => setSelectedVal(e.target.value)

    return (
        <>
            <section className="pt-5" id="adopt-pet">
                <div className="container pt-md-5">
                    <div className="position-relative mb-lg-5 mb-4" data-aos="fade-up">
                        <h3 className="title-style mb-2 text-center">Choose your buddy!</h3>
                        <div className="title-paw-style">
                            <i className="fas fa-paw" />
                            <i className="fas fa-paw paw-2" />
                            <i className="fas fa-paw paw-3" />
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center py-4">
                        <div className="left-column col-lg-3">
                            <SearchByLocationPanel onSubmit={setSearchQueryHandler} />
                        </div>
                        <div className="posts-list col-lg-9 px-4 mb-lg-0 mb-5" data-aos="fade-left">
                            <div className="add-post-btn column d-flex align-items-end justify-content-between">
                                <div className="col-sm-3">
                                    <select
                                        className="form-select"
                                        id="filter-posts"
                                        onChange={filterHandler}
                                        value={selectedVal}
                                    >
                                        <option value="" disabled>
                                            Sort By :-
                                        </option>
                                        {categories.map((option, i) => (
                                            <option key={i} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <Link to="register-new-vet" className="btn btn-style btn-secondary">Donate a vet</Link>
                            </div>
                            {/* list of available pets */}
                            {posts && !searchTerm && <Suspense fallback={fallback}>
                                <Await resolve={posts}>
                                    {posts => <PostsList posts={posts} />}
                                </Await>
                            </Suspense>}
                            {/* //list of available pets */}
                            {/* map showing available locations */}
                            {searchTerm &&
                                <div className="container col-lg-12 md-6 py-5">
                                    <MapContainer google={window.google} />
                                </div>
                            }
                            {/* map showing available locations */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_AUTOCOMPLETE_API_KEY
})(AdoptPet)

async function loadPosts() {
    const response = await fetch('https://freetestapi.com/api/v1/animals');

    if (!response.ok) {
        throw new Error('Failed to fetch available posts!')
    }
    else {
        const data = await response.json();
        return data;
    }
}

export function loader() {
    return defer({
        posts: loadPosts()
    });
}