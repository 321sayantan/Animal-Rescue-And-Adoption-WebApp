import { useState, Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import PostsSkeleton from "../components/Adopts/PostsSkeleton"
import PostsList from "../components/Adopts/PostsList";
import SearchByLocationPanel from "../components/Adopts/SearchByLocationPanel";
import { petCategList as categories } from "../utils/misc";


function AdoptPet() {
    const [showMap, setShowMap] = useState(false)
    const [selectedVal, setSelectedVal] = useState('')
    const { posts } = useLoaderData()

    const fallback = <PostsSkeleton />

    // useEffect(() => {
    //     setShowMap(false)
    // }, [])

    const searchPostsHandler = (locData) => {
        setShowMap(true);
        console.log(locData)
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
                            <SearchByLocationPanel onSubmit={searchPostsHandler} />
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
                            {posts && !showMap && <Suspense fallback={fallback}>
                                <Await resolve={posts}>
                                    {posts => <PostsList posts={posts} />}
                                </Await>
                            </Suspense>}
                            {/* //list of available pets */}
                            {/* map showing available locations */}
                            {showMap &&
                                <div className="container col-lg-12 md-6 py-5">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin"
                                        title='available-locations'
                                        allowFullScreen
                                    />
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

export default AdoptPet

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