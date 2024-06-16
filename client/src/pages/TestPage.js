// import React, {useState, useEffect} from 'react';
// import axios from "axios";

// const TestPage = () => {
//     const [dataa, setDataa] = useState([]);

//     useEffect(async ()=>{
//         try{
//         const token =  "Bearer " + localStorage.getItem("jwt");
//         const config = {
//             headers:{
//                 authorization: token
//             }
//         }
//         const res = await axios.get('http://localhost:5000/user/getuser',config);
//         console.log(res.data)
//         setDataa(res.data);
//         console.log(dataa)
//      }
//      catch(err){
//         console.log(err)
//      }
//     },[])

//   return (
//     <div>
//       <h1>Users</h1>
//       <h1>{dataa}</h1>
//       {/* {dataa.map((user)=>{
//         <h1>{user.name}</h1>
//       })} */}
//       <h1>end</h1>
//     </div>
//   )
// }

// export default TestPage