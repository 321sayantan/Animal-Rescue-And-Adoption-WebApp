import { useLoaderData, defer, Await } from "react-router-dom"
import { Suspense } from "react"
import ProfilePageContent from "../components/ProfilePageContent"
import ProfilepageSkeletons from "../components/ProfilepageSkeletons"


function UserProfile() {
    const { userData } = useLoaderData()
    const fallback = <ProfilepageSkeletons />

    return (
        <>
            <Suspense fallback={fallback}>
                <Await resolve={userData}>
                    {data => <ProfilePageContent userData={data} />}
                </Await>
            </Suspense>
            {/* <ProfilePageContent /> */}
        </>
    )
}

export default UserProfile


async function loadUserData(params) {
    const jwt = localStorage.getItem("jwt");
    const response = await fetch('http://localhost:5000/profile/getuser', {
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${jwt}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch User details!');
    }
    const data = await response.json();
    // console.log(data)
    return data;
}

export function loader() {
    return defer({
        userData: loadUserData()
    })
}