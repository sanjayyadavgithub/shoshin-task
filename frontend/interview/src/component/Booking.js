import React, { useEffect, useState } from 'react'
import { Outlet, Link,useHistory } from "react-router-dom";
import axios from 'axios'


export default function Booking() {
    const history = useHistory()
    const [serviceData, setServiceData] = useState();
    const [bookingData,setBookingData] = useState({
        bookName:'',
        type:'',
        serviceId:''
    })
    useEffect(() => {
        console.log("usee");
        const getService = async () => {
        const serviceRes = await axios.get("http://localhost:4000/api/services");
        console.log("res", serviceRes);
        setServiceData(serviceRes);
        };
        getService();
    });

    const bookingSubmit = async() =>{
        if(bookingData.bookName!="" || bookingData.type!="" ||bookingData.serviceId){
            const bookingRes = await axios.post(" http://localhost:4000/api/booking",bookingData);
            if(bookingRes.Ok){
                history.push("/")
            }else{
                alert("Something went Wrong")
            }
        }
    }
  return (
    <div>
         <Link to={`/`}><button>Back</button></Link>
         <input type="text" placeholder='enter booking name' onChange={(e)=>setBookingData({...bookingData,bookName:e.target.value})}/>
         <input type="text" placeholder='enter booking type' onChange={(e)=>setBookingData({...bookingData,type:e.target.value})}/>
         <select onChange={(e)=>setBookingData({...bookingData,serviceId:e.target.value})}>
            {serviceData && serviceData?.map((service,ind)=>{
                return <option key={ind} value={service._id}>{service.name}</option>
            })}
         </select>
         <button onClick={()=>bookingSubmit()}>Booking</button>
    </div>
  )
}
