
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import './About.css'


const About = () => {

    const[about,setAbout] = useState([])

    useEffect(()=>{
        fetch('about.json')
        .then(res=>res.json())
        .then(data=>setAbout(data.about))
    },[])


    return (
        <div className="container">
            <img className="img-fluid" src="https://www.indiaeducation.net/imagesvr_ce/4502/4%20College%20de%20Valleyfield.jpg" alt="" />

            <h3 className="text-center text_color m-5 p-5">Dreem is one of the most prestigious universities in the runing time. Through teaching, research and innovation, Dreem is committed to the advancement and well-being of the nation and the world.</h3>

            <div>

                {/* about card area */}


                <div>
                    <div className="row">
                    {about?.map((abouts) => (
                        <div key={abouts.id} className="col-md-6">
                        <div className="card">
                            <div className="cart-details">
                            <img className="img-fluid card-img-top" src={abouts.picture} alt="" />
                            </div>
                            <div className="card-body">
                            <h4 className="card-text mainText">{abouts.title}</h4>
                            <p>{abouts.info}</p>
                            
                            
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    </div>

            </div>

        </div>
    );
};

export default About;