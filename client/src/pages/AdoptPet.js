import { useState, Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PostsSkeleton from "../components/Adopts/PostsSkeleton"
import PostsList from "../components/Adopts/PostsList";
import SearchByLocationPanel from "../components/Adopts/SearchByLocationPanel";
import { petCategList as categories } from "../utils/misc";
import MapContainer from "../components/MapContainer";
import { location } from "../utils/misc";
import { fetchFilteredPosts } from "../utils/httpRequests";
import ErrorToFetch from "../components/UI/ErrorToFetch";
import MapPreLoader from "../components/UI/MapPreLoader";
import PostsFilteredList from "../components/PostsByQueryList";



function AdoptPet() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVal, setSelectedVal] = useState('')
    const { posts } = useLoaderData()

    const fallback = <PostsSkeleton />
    let content, postcontent;

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["filteredPosts", { searchTerm }],
        queryFn: ({ signal, queryKey }) => fetchFilteredPosts({ signal, ...queryKey[1] }),
        enabled: searchTerm !== undefined,
    });

    const setSearchQueryHandler = (locData) => {
        setSearchTerm(locData)
    }

    const filterHandler = (e) => setSelectedVal(e.target.value)

    if (isLoading) {
        content = <MapPreLoader msg='Gathering related posts...' />;
    }

    if (isError) {
        content = <ErrorToFetch error={error} />
    }

    if (data) {
        content = <MapContainer filteredPosts={data} />;
        postcontent = <PostsFilteredList posts={data} />;
    }

    return (
        <>
            <section className="pt-5" id="adopt-pet">
                <div className="container pt-md-5">
                    <div className="position-relative mb-lg-5 mb-4" data-aos="fade-up">
                        <h3 className="title-style mb-2 text-center">
                            Choose your buddy!
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
                                <Link
                                    to="register-new-vet"
                                    className="btn btn-style btn-secondary"
                                >
                                    Donate a vet
                                </Link>
                            </div>
                            {/* list of available pets */}
                            {posts && !searchTerm && (
                                <Suspense fallback={fallback}>
                                    <Await resolve={posts}>
                                        {(posts) => <PostsList posts={posts} />}
                                    </Await>
                                </Suspense>
                            )}
                            {/* //list of available pets */}
                            {/* map showing available locations */}
                            {searchTerm && (
                                <div className="container col-lg-12 md-6 py-5">
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
    );
}

export default AdoptPet


async function loadPosts() {
    const response = await fetch("http://localhost:5000/adopt/getallpost");

    if (!response.ok) {
        throw new Error("Failed to fetch available posts!");
    } else {
        const data = await response.json();
        return data;
    }
}

export function loader() {
    return defer({
        posts: loadPosts()
    });
}