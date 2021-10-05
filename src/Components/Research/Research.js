import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import './Research.css'


const Research = () => {

    const[reserch, setResearh] = useState([])
    useEffect(()=>{
        fetch('research.json')
        .then(res => res.json())
        .then(data => setResearh(data.research))
    },[])
    return (
        <div className="container">
            <img className="mb-5 img-fluid" src="https://engineering.stanford.edu/sites/default/files/styles/full-width-banner-short/public/materials-sci_apr.jpg?itok=N3lwdr0C" alt="" />



        {/* card area  */}

        <div>
            <div className="row">
            {reserch?.map((reserchs) => (
                <div key={reserchs.id} className="col-md-6">
                <div className="card">
                    <div>
                    <img className=" img-fluid card-img-top" src={reserchs.picture} alt="" />
                    </div>
                    <div className="card-body">
                    <h5 className="text_color">{reserchs.title}</h5>
                    
                    
                    
                    </div>
                </div>
                </div>
            ))}
            </div>
            </div>





        {/* card area  */}



        </div>
    );
};

export default Research;