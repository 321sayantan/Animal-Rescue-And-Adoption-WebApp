import { useEffect, useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import PostIsConfirmed from '../components/PostIsConfirmed';
import { toast } from 'react-toastify';

function AdoptPostIsConfirmed() {
    const location = useLocation()
    const { jwt } = useContext(AuthContext)
    const id = new URLSearchParams(location.search).get('id')
    const toggleAdoptedRequestHandler = async () => {
        // console.log({ jwt, id })
        try {
            // const response = await toast.promise(
            //     fetch(`http://localhost:5000/adopt/markAdopt/${id}`,
            const response = await toast.promise(
              fetch(
                `https://adopet-backend.onrender.com/adopt/markAdopt/${id}`,
                {
                  headers: {
                    authorization: `Bearer ${jwt}`,
                  },
                }
              ),
              {
                pending: "Changing status...",
              }
            );
            const result = await response.json()
            console.log(result)

            if (response.ok) {
                toast.success(result.msg)
            } else {
                toast.error(result || 'Something went wrong!😢')
                console.log(result)
            }
        } catch (err) {
            console.error(err || 'Something went wrong!')
        }
    }

    useEffect(() => {
        if (jwt) {
            toggleAdoptedRequestHandler()
        }
    })

    return (
        <PostIsConfirmed>
            <h1>Your Post for adoption Succefully marked as adopted</h1>
            <p>This post is no more avaliable for viewers</p>
            <h5>
                Click to go to <Link to="../..">Home</Link>
            </h5>
        </PostIsConfirmed>
    )
}

export default AdoptPostIsConfirmed
