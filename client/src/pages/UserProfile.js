import { useLoaderData, defer, Await } from "react-router-dom"
import { Suspense } from "react"
import ProfilePageContent from "../components/ProfilePageContent"
import ProfilepageSkeletons from "../components/ProfilepageSkeletons"


function UserProfile() {
    // const { userData } = useLoaderData()
    const fallback = <ProfilepageSkeletons />

    return (
        <>
            {/* <Suspense fallback={fallback}>
                <Await resolve={userData}>
                    {data => <ProfilePageContent userData={data} />}
                </Await>
            </Suspense> */}
            <ProfilePageContent />
        </>
    )
}

export default UserProfile


// async function loadUserData(params) {
//     const id = params.id;
//     const response = await fetch(`http://localhost:5000/user/`);
//     if (!response.ok) {
//         throw new Error('Failed to load post detalis!');
//     } else {
//         const data = await response.json();
//         return data;
//     }
// }

// export function loader({ params }) {
//     return defer({
//         postData: loadUserData(params)
//     })
// }