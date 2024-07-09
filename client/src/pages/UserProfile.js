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
    try {
        const jwt = localStorage.getItem("jwt");
        // const response = await fetch('http://localhost:5000/profile/getuser', {
        const response = await fetch(
          "https://adopet-backend.onrender.com/profile/getuser",
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${jwt}`,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data || 'Failed to fetch');
        }
        // console.log(data)
        return data;
    } catch (error) {
        console.error(error)
    }
}

export function loader() {
    return defer({
        userData: loadUserData()
    })
}