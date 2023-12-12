import React, { useEffect } from 'react'
import { Outlet, Link,useParams } from "react-router-dom";
import axios from 'axios'

export default function ServiceDetails() {
    const { id } = useParams();
    const [serviceDetails,setServiceDetails] = useState()
    

   useEffect(()=>{
        const getServiceDetails = async () => {
            const serviceRes = await axios.get(`http://localhost:4000/api/services/${id}`);
            console.log("res", serviceRes);
            setServiceDetails(serviceRes);
        };
        getServiceDetails();
   },[id])
  return (
    <div>
        <Link to={'/'}><button>Back</button></Link>
        {serviceDetails && <div>
            <h1>{serviceDetails.id}</h1>
            <h3>{serviceDetails.name}</h3>
            <h4>{serviceDetails.type}</h4>
            </div>
        }
    </div>
  )
}
