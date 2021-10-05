import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import './Campus.css'

const Campus = () => {
    const[campuse,setCampus]= useState([])

    useEffect(()=>{
        fetch('campus.json')
        .then(res=>res.json())
        .then(data=>setCampus(data.campus))
    },[])
    return (
        <div className="container">
            <img className="img-fluid" src="https://caltech-prod.s3.amazonaws.com/main/images/convocation.2e16d0ba.fill-1600x900-c100.jpg" alt="" />

            <div>
                <h1 className="m-2 mainText p-5">WE OFFER THE WORLD FIRST CLASS CAMPUS FACILITIES FOR OUR STUDENT</h1>



            {/* campus card area */}

            <div>
                <div className="row">
                {campuse?.map((campuses) => (
                    <div key={campuses.id} className="col-md-6">
                    <div className="card">
                        <div className="">
                        <img className="img-fluid card-img-top" src={campuses.picture} alt="" />
                        </div>
                        <div className="card-body">
                        <h5 className="text">{campuses.title}</h5>
                         </div>
                    </div>
                    </div>
                ))}
                </div>
                </div>

            {/* campus card area */}

            </div>
        </div>
    );
};

export default Campus;