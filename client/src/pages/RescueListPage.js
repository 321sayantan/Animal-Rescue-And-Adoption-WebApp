import { useState, Suspense } from "react";
import { useLoaderData, Await, defer } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRescueFilteredPosts } from "../utils/httpRequests";
import SearchByLocationPanel from "../components/Adopts/SearchByLocationPanel"
import { rescueCategList as categories } from "../utils/misc";
import RescueList from "../components/Rescue/RescueList";
import MapPreLoader from "../components/UI/MapPreLoader";
import ErrorToFetch from "../components/UI/ErrorToFetch";
import MapContainer from "../components/MapContainer";
import RescueListSkeleton from "../components/Rescue/RescueListSkeleton";
import RescueFilteredList from "../components/RescuePostsByQueryList";
// import { rescuePosts as posts } from "../utils/misc";


function RescueListPage() {
    const { rescuePosts } = useLoaderData()
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVal, setSelectedVal] = useState('')
    const [postsData, setPostsData] = useState(rescuePosts)

    const fallback = <RescueListSkeleton />
    let content, postcontent;

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["filteredRescuePosts", { searchTerm }],
        queryFn: ({ signal, queryKey }) => fetchRescueFilteredPosts({ signal, ...queryKey[1] }),
        enabled: searchTerm !== undefined,
    });

    const setSearchQueryHandler = (locData) => {
        setSearchTerm(locData)
    }

    const filterHandler = async (e) => {
        setSelectedVal(e.target.value)
        if (e.target.value === '') {
            setPostsData(rescuePosts)
            return
        }
        // console.log(rescuePosts)
        const res = await rescuePosts.then(result => result)
        const newItems = res.filter((item) => item.vet_category === e.target.value)
        setPostsData(newItems)
        console.log(newItems)
        // console.log(e.target.value)
    }

    if (isLoading) {
        content = <MapPreLoader msg='Gathering related posts...' />;
    }

    if (isError) {
        content = <ErrorToFetch error={error} />
    }

    if (data) {
        content = <MapContainer filteredPosts={data} />;
        postcontent = <RescueFilteredList posts={data} />;
    }
    return (
        <>
            <section className="pt-5" id="rescue-pet">
                <div className="container pt-md-5">
                    <div className="position-relative mb-lg-5 mb-4" data-aos="fade-up">
                        <h3 className="title-style mb-2 text-center">
                            Save a life..
                        </h3>
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
                        <div
                            className="posts-list col-lg-9 px-4 mb-lg-0 mb-5"
                            data-aos="fade-left"
                        >
                            <div className="filter-categ_btn column d-flex align-items-end justify-content-end mt-1">
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
                            </div>
                            {/* list of available rescue animals */}
                            {rescuePosts && !searchTerm && (
                                <Suspense fallback={fallback}>
                                    <Await resolve={postsData}>
                                        {(posts) => <RescueList posts={posts} />}
                                    </Await>
                                </Suspense>
                            )}
                            {/* //list of available rescue animals */}
                            {/* map showing available locations */}
                            {searchTerm && (
                                <div className="mx-3 col-lg-12 md-6 py-5">
                                    <div className="position-relative map-wrapper">
                                        {content}
                                    </div>
                                    {postcontent}
                                </div>
                            )}
                            {/* map showing available locations */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RescueListPage


async function loadRescuePosts() {
    const response = await fetch("http://localhost:5000/rescue/getallrescues");

    if (!response.ok) {
        throw new Error("Failed to fetch available posts!");
    } else {
        const data = await response.json();
        return data;
    }
}

export function loader() {
    return defer({
        rescuePosts: loadRescuePosts()
    });
}